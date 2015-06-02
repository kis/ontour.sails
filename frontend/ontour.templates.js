angular.module("ontour").run(["$templateCache", function ($templateCache) {  'use strict';

  $templateCache.put('frontend/templates/search-bar.html',
    "<menu id=\"search\"\n" +
    "      ng-class=\"{'slide-menu' : pages.page}\"\n" +
    "      class=\"fade-animation\">\n" +
    "    <section>\n" +
    "        <nav ng-repeat=\"tab in tabTitles\"\n" +
    "             ng-click=\"switchTab(tab)\"\n" +
    "             ng-class=\"{'active' : menu.activeTab.title === tab.title}\"\n" +
    "             ng-bind=\"tab.name\"\n" +
    "             ng-cloak\n" +
    "             class=\"tab\">\n" +
    "        </nav>\n" +
    "    </section>\n" +
    "\n" +
    "    <section ng-controller=\"AutocompleteController\">\n" +
    "        <form name=\"menuForm\">\n" +
    "            <input ng-class=\"{'invalid' : menuForm.searchValue.$invalid}\"\n" +
    "                   ng-model=\"menu.searchValue\"\n" +
    "                   ng-keydown=\"getAutocompleteData(menu.searchValue)\"\n" +
    "                   ng-cloak\n" +
    "                   class=\"search-field\"\n" +
    "                   name=\"searchValue\"\n" +
    "                   placeholder=\"Введите {{menu.activeTab.title}}\">\n" +
    "        </form>\n" +
    "        \n" +
    "        <section class=\"autocomplete\">\n" +
    "            <div ng-repeat=\"item in autocomplete.items\"\n" +
    "                 ng-click=\"search(item.name)\"\n" +
    "                 ng-mouseover=\"selectItem(item)\"\n" +
    "                 ng-class=\"{'hover' : autocomplete.activeItem === item}\"\n" +
    "                 ng-cloak>\n" +
    "                 <a>{{item.name}} {{item.meta}}</a>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "\n" +
    "    <section class=\"tags\"\n" +
    "             ng-if=\"menu.activeTab.name === 'Город'\"\n" +
    "             class=\"fade-animation\">\n" +
    "        <div ng-repeat=\"tag in tags\"\n" +
    "             ng-click=\"switchTag(tag)\"\n" +
    "             ng-class=\"{'active' : menu.activeTag === tag}\"\n" +
    "             ng-bind=\"tag\"\n" +
    "             ng-cloak\n" +
    "             class=\"tag\">\n" +
    "        </div>\n" +
    "    </section>\n" +
    "    \n" +
    "    <a class=\"search-button\" ng-click=\"search(menu.searchValue)\">Поиск</a>\n" +
    "\n" +
    "    <a ng-click=\"setFestivalsOnly()\"\n" +
    "       ng-class=\"{'active' : menu.festivalsOnly === 1}\"\n" +
    "       title=\"Только фестивали\"\n" +
    "       class=\"festivals\"> Ф </a>\n" +
    "\n" +
    "</menu>"
  );
  } ]);