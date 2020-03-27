# TypeScript

## Vorbereitung

- nodejs installieren (nodejs.org)
- visual studio code installieren (code.visualstudio.com)
- `npm install -g typescript`
- `tsc -v` eingeben -> Version von TypeSCript sollte angezeigt werden
    - wenn nicht, als Admin in  der Powershell:
    - `Set-ExecutionPolicy -ExecutionPolicy Unrestricted`
    - ausführen

## Schlüsselwort `let`

```Javascript
//ES6 -> Schlüsselwort let
let x = 10;
{
    let y = 10;
}
console.log(x);
console.log(y);
```

## Schlüsselwort const

wie in C#: Bei Deklaration muss initialisiert werden

## Template Strings

- Strings über mehrere Zeilen
- werden mit einem Backtick eingeleitet und beendet `
- mittels `${variable}` können Variablenwerte eingefügt werden

## Fat Arrow Functions

- "Lambdaschreibweise" von C#
- `() => { Anweisungen }`

## Klassen in ES6

Beispiel
```JavaScript
class Person{
    firstName = "";
    lastName = "";
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    name(){
        return  `${this.firstName} ${this.lastName}`;
    }

    whoAreYou(){
        return `Hi, i'm ${this.name()}`;
    }
}

let michael = new Person("Michael","Schmitt");
console.log(michael.whoAreYou());
```

# Angular

## Angular Cli Installation

`npm install -g @angular/cli`

## Neues Projekt anlegen

`ng new <Projektname>`

## Angular Components

- Erweitern die HTML-Sprache mit neuen Tags
- Decorator
    - selector --> HTML Tag bezeichnen
    - template --> innerHTML von dem Selector

## Angular Bootstrapping

- Angabe, wie Angular eine HTML Seite lädt bzw. behandelt

## Angular Binding

### Input Binding

- String Interpolation
    - `{{ <javaScriptausführung> }}` innerhalb der Klammern wird JS ausgeführt
- DOM-Attributbinding
    - mittels `[]` umschließen
    - die Zuweisung wird als JavaScript ausgeführt

### Output Event Binding

- Erzeugen eines EventAttributs mittels der Klasse `EventEmitter`
- Dekorieren des EventAttributs mit dem `@Output` Deocorator
- Event raisen mit der `emit`-Methode des EventAttributs

Beispiel:
```TypeScript
  @Output() onEvent = new EventEmitter<DatenObjekt>();
  EventRaisen(e:string, d: string){
    let v = new DatenObjekt(e,d);
    this.onEvent.emit(v);
  }
  ```

## Agular Direktiven

- Angular HTML-Attribut
- Beginnt mit `*ng`
- Steuert HTML zur Laufzeit
- Schleife
    - "Foreach"-Schleife
        - *ngFor="let objekt of objekte"
        - Wiederholt das HTML-Element
        - Anzahl Durchläufe entspricht der Listen-/Arraygröße
- Verzweigungen
    - `*ngIf`

## Angular Data Modelling

- Klassen in TypeScript/ES6
- Kapselung der Daten und Logik bezogen auf ein Datum (Vokabel)

## Angular Template Reference Variable/Template local Variable

- Ermöglicht den Zugriff auf HTML-Element innerhalb eines Templates
- Das Tag wird mit einem Bezeichner beginnend mit einer Raute `#` gekennzeichnet
    - ```HTML
    <input type="text"
             class="form-control"
             placeholder="englisches Wort"
             #englischerText/>
             ```
- Zugreifen kann ich mit dem Bezeichner und entsprechendem Attribut des Elements
    - `(click)=erstelleVokabel(englischerText.value)`


# Überschrift für Git test