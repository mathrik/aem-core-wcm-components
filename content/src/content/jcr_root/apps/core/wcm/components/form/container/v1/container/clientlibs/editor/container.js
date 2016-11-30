/*******************************************************************************
 * Copyright 2016 Adobe Systems Incorporated
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
/*global
 Granite, Coral
 */
(function (document, $, Coral) {
    "use strict";

    var ACTION_TYPE_SETTINGS_SELECTOR = "#cmp-action-type-settings",
        ACTION_TYPE_ELEMENT_SELECTOR  = ".cmp-action-type-selection";

    $(document).on("foundation-contentloaded", function (e) {
        if ($(e.target).find(ACTION_TYPE_ELEMENT_SELECTOR).length > 0) {
            $(ACTION_TYPE_ELEMENT_SELECTOR, e.target).each(function (i, element) {
                var target = $(element).data("cqDialogDropdownShowhideTarget");
                if (target) {
                    Coral.commons.ready(element, function (component) {
                        showHide(component, target);
                        component.on("change", function () {
                            showHide(component, target);
                        });
                    });
                }
            });
            showHide($(".cq-dialog-dropdown-showhide", e.target));
        }
    });

    function showHide(component, target) {
        var value              = component.value,
            $target            = $(target),
            $workflowSelection = $(".cmp-workflow-selection"),
            $redirectSelection = $(".cmp-redirect-selection");

        $target.not(".hide").addClass("hide").each(function (i, element) {
            $(element).find('input[aria-required=true]').each(function (index, element) {
                toggleValidation($(element));
            })
        });

        $workflowSelection.addClass("hide");
        $redirectSelection.addClass("hide");

        $target.closest(ACTION_TYPE_SETTINGS_SELECTOR).addClass("hide");

        $(target).filter("[data-showhidetargetvalue='" + value + "']").each(function (index, element) {
            var $element = $(element);
            $element.removeClass("hide");
            $element.find('input[aria-required=false]').each(function (index, element) {
                toggleValidation($(element));
            });

            showHideOptional($element, $workflowSelection, "usesworkflow");
            showHideOptional($element, $redirectSelection, "usesredirect");
            $element.closest(ACTION_TYPE_SETTINGS_SELECTOR).removeClass("hide");
        });
    }

    function showHideOptional($element, $optional, data) {
        var showOptional = $element.data(data);
        if (showOptional) {
            $optional.removeClass("hide");
        }
    }

    /**
     * If the form element is not shown we have to disable the required validation for that field.
     *
     * @param $field to disable / enable required validation
     */
    function toggleValidation($field) {
        var notRequired = false;
        if ($field.attr("aria-required") === "true") {
            notRequired = true;
            $field.attr("aria-required", "false");
        } else if ($field.attr("aria-required") === "false") {
            $field.attr("aria-required", "true");
        }
        var api = $field.adaptTo("foundation-validation");
        if (api) {
            if (notRequired) {
                api.checkValidity();
            }
            api.updateUI();
        }
    }

})(document, Granite.$, Coral);