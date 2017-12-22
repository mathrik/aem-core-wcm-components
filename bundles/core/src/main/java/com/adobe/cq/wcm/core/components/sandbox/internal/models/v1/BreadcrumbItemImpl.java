/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2017 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

package com.adobe.cq.wcm.core.components.sandbox.internal.models.v1;

import java.util.List;

import org.apache.sling.api.SlingHttpServletRequest;

import com.adobe.cq.wcm.core.components.sandbox.models.NavigationItem;
import com.day.cq.wcm.api.Page;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(value = {"page", "children", "level", "description", "lastModified", "path"})
public class BreadcrumbItemImpl extends com.adobe.cq.wcm.core.components.internal.models.v1.NavigationItemImpl implements NavigationItem {

    NavigationItemImpl navigationItem;

    public BreadcrumbItemImpl(Page page, boolean active, SlingHttpServletRequest request, int level, List<NavigationItem> children) {
        super(page, active);
        navigationItem = new NavigationItemImpl(page, active, request, level, children);
    }

    @Override
    public String getTitle() {
        return navigationItem.getTitle();
    }

    @Override
    public String getURL() {
        return navigationItem.getURL();
    }
}