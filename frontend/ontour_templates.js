angular.module("ontour").run(["$templateCache", function ($templateCache) {  'use strict';

  $templateCache.put('frontend/templates/events.html',
    "<div id=\"events\" infinite-scroll=\"nextPage()\" \n" +
    "                 infinite-scroll-distance=\"2\">\n" +
    "    <div class=\"event-item\"\n" +
    "         ng-repeat=\"event in events track by $index\"\n" +
    "         ng-class=\"{'selected' : event.selected || event.focused}\"\n" +
    "         ng-click=\"selectEvent(event)\"\n" +
    "         ng-mouseenter=\"showPopup(event, 1)\"\n" +
    "         ng-mouseleave=\"hidePopup(event)\"\n" +
    "         ng-cloak>\n" +
    "         <img ng-src=\"{{event.image[3]['#text']}}\" class=\"artist-pic\" />\n" +
    "         <div class=\"artist-data\">\n" +
    "            {{event.date}} <br/> \n" +
    "            {{event.artists.headliner}} <br/><br/> \n" +
    "            {{event.venue.name}} <br/> \n" +
    "            {{event.venue.location.city}} {{event.venue. location.country}} <br/>\n" +
    "         </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('frontend/templates/search-bar.html',
    "<div id=\"search\" ng-class=\"{slide: pages.page}\">\n" +
    "    <nav ng-repeat=\"tab in tabTitles\"\n" +
    "         ng-click=\"switchTab(tab)\"\n" +
    "         ng-class=\"{'active' : menu.activeTab.title === tab.title}\"\n" +
    "         ng-bind=\"tab.name\"\n" +
    "         ng-cloak\n" +
    "         class=\"tab\">\n" +
    "    </nav>\n" +
    "\n" +
    "    <section ng-controller=\"AutocompleteController\">\n" +
    "      <form name=\"menuForm\">\n" +
    "          <input ng-class=\"{'invalid' : menuForm.searchValue.$invalid}\"\n" +
    "                 ng-model=\"menu.searchValue\"\n" +
    "                 ng-keydown=\"getAutocompleteData(menu.searchValue)\"\n" +
    "                 ng-cloak\n" +
    "                 class=\"search-field\"\n" +
    "                 name=\"searchValue\"\n" +
    "                 placeholder=\"Введите {{menu.activeTab.title}}\">\n" +
    "      </form>\n" +
    "      \n" +
    "      <section class=\"autocomplete\">\n" +
    "          <div ng-repeat=\"item in autocomplete.items\"\n" +
    "               ng-click=\"search(item.name)\"\n" +
    "               ng-mouseover=\"selectItem(item)\"\n" +
    "               ng-class=\"{'hover' : autocomplete.activeItem === item}\"\n" +
    "               ng-cloak>\n" +
    "               <a>{{item.name}} {{item.meta}}</a>\n" +
    "          </div>\n" +
    "      </section>\n" +
    "    </section>\n" +
    "\n" +
    "    <section class=\"tags\"\n" +
    "             ng-class=\"{slidedown: menu.activeTab.name === 'Город'}\">\n" +
    "        <div ng-repeat=\"tag in tags\"\n" +
    "             ng-click=\"switchTag(tag)\"\n" +
    "             ng-class=\"{'active' : menu.activeTag === tag}\"\n" +
    "             ng-bind=\"tag\"\n" +
    "             ng-cloak\n" +
    "             class=\"tag\">\n" +
    "        </div>\n" +
    "    </section>\n" +
    "    \n" +
    "    <section class=\"submits\">\n" +
    "      <a class=\"search-button\" ng-click=\"search(menu.searchValue)\">Поиск</a>\n" +
    "      <a ng-click=\"setFestivalsOnly()\"\n" +
    "         ng-class=\"{'active' : menu.festivalsOnly === 1}\"\n" +
    "         title=\"Только фестивали\"\n" +
    "         class=\"festivals\">Фестивали</a>\n" +
    "    </section>\n" +
    "</div>"
  );
  } ]);