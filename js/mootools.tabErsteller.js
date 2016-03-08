/*!
********************************************************************************
mootools.tabErsteller.js by 
Gruenfisch Webdesign: Oliver Richter http://www.gruenfisch-webdesign.de

Dieses Werk bzw. Inhalt (mootools.tabErsteller.js) steht unter einer 
Creative Commons Namensnennung - Nicht-kommerziell -
Weitergabe unter gleichen Bedingungen 3.0 Deutschland Lizenz

requires: Mootools 1.3 oder higher 
********************************************************************************
*/



var tabErsteller = 
 {
   
  /****************************************************************************/ 
  /***** Start: Markup erstellen, Events bereit stellen ***********************/ 
  /****************************************************************************/     
  initialisieren: function(arg)
   {  
   
    (arg.tabSelector)           ? tabSelector = arg.tabSelector : tabSelector = '.tab'; // nur CSS-Klassen oder CSS-Selektoren wie 'p.tabbereich'
    (arg.tabPrefix)             ? tabPrefix = arg.tabPrefix : tabPrefix = 'tab_';
    (arg.tabMenueLinkPrefix)    ? tabMenueLinkPrefix = arg.tabMenueLinkPrefix : tabMenueLinkPrefix = 'tabmenue_link_';
    (arg.tabActive)             ? tabActive = arg.tabActive : tabActive = 0;
    (arg.tabNameDefault)        ? tabNameDefault = arg.tabNameDefault : tabNameDefault = "Tab ";
    (arg.tabNameArr)            ? tabNameArr = arg.tabNameArr : tabNameArr = new Array('1.', '2.', '3.', '4.');
    
    var tabContainer = new Element('div', { id: 'tabcontainer', html: "" });   
    var tabMenueSprungmarke = new Element('a', { href: '#tabmenue_uebersprung', html: 'Tab-Navigation überspringen', 'class': 'unsichtbar' } );
    var tabMenue = new Element('ul', { id: 'tabmenue', html: "" }); 
    var tabMenueAnker = new Element('a', { name: 'tabmenue_uebersprung', html: '&nbsp;', 'class': 'unsichtbar' } ); 
  
    tabContainer.adopt(tabMenueSprungmarke);
    tabContainer.adopt(tabMenue);
    tabContainer.adopt(tabMenueAnker);
    
    var i = 0; 
    
    $$(tabSelector).each  
     (
      function(aktElem)
       {
        tabContainer.wraps(aktElem);
        $("tabmenue").adopt( new Element('li', { id: "tabmenue_li_"+i, html: "<a class='"+tabMenueLinkPrefix+"' href='#tabanker_"+i+"' onclick=\"javascript: tabErsteller.tabwahl('"+tabSelector+"', '"+i+"'); return false;\" onfocus=\"javascript: tabErsteller.tabwahl('"+tabSelector+"', '"+i+"'); return false;\" id='"+tabMenueLinkPrefix+i+"'>"+(  (typeof(tabNameArr[i]) == 'undefined') ? tabNameDefault+i : tabNameArr[i]  )+"</a>" }) ); 
        aktElem.set("class", aktElem.get("class") + " " + tabPrefix+i ); 
        aktElem.set("id", tabPrefix+i);
        new Element('a', { id: 'tabanker_'+i, html: "&nbsp;", 'class': 'unsichtbar' }).inject( aktElem, 'top'); 
        i++;        
       }
     );
     
    tabErsteller.tabwahl(tabSelector); 
   },
   
   
  
  /****************************************************************************/ 
  /***** Start: Auswahl der Tabs steuern **************************************/ 
  /****************************************************************************/   
  tabwahl: function(elemSelektor, id)
   {  
    if (elemSelektor)
     {
      // Bei allen Tab-Elementen die Klasse active_tab loeschen
      $$(elemSelektor).each( function(aktElem) { aktElem.removeClass('active_tab'); } );
      
      // Bei allen Tab-Menue-Links die Klasse active_tabmenue_link loeschen
      $$("."+tabMenueLinkPrefix).each( function(aktElem) { aktElem.removeClass('active_'+tabMenueLinkPrefix); } );      

      // Aktiven Tab festlegen (entw. laut ID oder n. Element)      
      (id) ? $(tabPrefix+id).addClass('active_tab') : $$(elemSelektor)[tabActive].addClass('active_tab'); 

      // Aktiven Tab-Menue-Link festlegen (entw. laut ID oder n. Element) 
      (id) ? $(tabMenueLinkPrefix+id).addClass('active_'+tabMenueLinkPrefix) : $$("."+tabMenueLinkPrefix)[tabActive].addClass('active_'+tabMenueLinkPrefix);
     } 
   }
  
 };
 