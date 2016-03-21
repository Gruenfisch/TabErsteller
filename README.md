# TabErsteller #


## Beschreibung ##


Erzeugen von Tabs aus Block-Elementen mit bestimmter Klasse. 

Ich freue mich �ber Hinweise und Kritiken. 


## Anforderungen ##


* JQuery 1.3.1
* Spezifische Markup-Struktur:

```
<p class="tab">Erster Absatz/Tab</p>
<p class="tab">Zweiter Absatz/Tab</p> 
<p class="tab">Dritter Absatz/Tab</p>
```  
    
    

## Installation ##


#### 1. JS-Framework und Stylesheets bereit stellen ####

Binden Sie diese Anweisungen z.B. im Header Ihrer Webseite ein: 

```
<script src="https://ajax.googleapis.com/ajax/libs/mootools/1.6.0/mootools.min.js"></script>
<script src="/javascript/mootools.tabErsteller.js"></script>
<link href="/css/screen.css" rel="stylesheet" />
```


#### 2. Aufruf/Instanzierung ####

F�gen Sie diesen Code unterhalb des Formulars oder am Ende der Seite vor dem
abschlie�enden Body-Tag ein: 

```
<script>
window.addEvent('domready', function() 
    { 
        var objInstanz = new tabErsteller.initialisieren( 
            { 
                tabActive: 3,
                tabNameArr: new Array ( "Details zum Produkt", "Bestellen" )
            });
    });
</script>
```


#### 3. Gestaltung anpassen ####

Passen Sie zuletzt optional das CSS entsprechend an. 



## Optionen ##



Bezeichner                      |   Standard-Wert oder Beispiel                 |   Erkl�rung
----------                      |   ---------------------------                 |   --------- 
tabSelector                     |   ".tab" (String)                             |   Geben Sie einen CSS-Klassen-Selektor f�r die Elemente, aus denen die Tabs generiert werden. 
tabActive                       |   0 (Integer)                                 |   Geben Sie eine Nummer f�r den aktiven Tab an.  
tabNameDefault                  |   "Tab " (String)                             |   Standard-Name (Label) f�r den Tab
tabNameArr                      |   new Array('1.', '2.', '3.', '4.') (Array)   |   Name (Label) f�r die einzelnen Tabs


## Lizenz ##

TabErsteller ist ein Projekt von 
Gruenfisch Webdesign: Oliver Richter http://www.gruenfisch-webdesign.de

Dieses Werk ist lizenziert unter einer Creative Commons Namensnennung - Weitergabe unter gleichen Bedingungen 4.0 International Lizenz.

