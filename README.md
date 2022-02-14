# Hook oferuje :keyboard:
- Automatyczne odczytywanie wiadomości
- Obecność na każdej "wysyłanej" lekcji
- Wysłanie wiadomości na kanał Discord, gdzie można je łatwo przeglądać

# Wymagania :dvd:
- [Node.js](https://nodejs.org) LTS v16.14.0 (jeśli masz win7 i nie możesz zainstalować to kliknij [tutaj](https://basewin.pl/) albo [tutaj](https://ubuntu.com/download), aby pobrać lepszy system)
- npm, który i tak już przychodzi z nodem

# Instalacja :cd:
## Windows
- Instalacja Node.js
  1. Wchodzisz na https://nodejs.org
  2. Klikasz zielony przycisk z napisem LTS
  3. Instalujesz jak każdy inny program
- Pobieranie hooka
  1. Klikasz zielony przycisk Code
  2. Download ZIP
  3. Wypakowywujesz

## Linux
- Instalacja Node.js
  1. Otwierasz terminal
  2. Instalujesz [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating)
    ```console
    $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    ```
  3. Pobierasz odpowiednią wersję Node.js
    ```console
    $ nvm install --lts
    ```
- Pobieranie hooka
  1. Otwierasz terminal
  2. Klonujesz rezpozytorium
    ```console
    $ git clone https://github.com/oogooro/librus-discord-webhook
    ```

# Jak uruchomić? :clipboard:
## Windows
1. Otwórz plik `TEN PLIK NAJPERW OTWÓRZ.bat` ~~kmiocie~~
   - Postępuj zgodnie z instrukcjami, czytaj uważnie *polecenia*
2. Po zakończonej konfiguracji możesz uruchamiać hooka otwierając plik `BOT.bat`

## Linux (działa też na Windowsie)
1. Uruchamiasz terminal
1. Wchodzisz w folder `librus-discord-webhook`
1. Wpisujesz i wypełniasz danymi: 
    ```
    $ npm i
    $ npm run init 
    ```
1. Teraz możesz uruchamiać hooka poleceniem `npm run start` lub `node .` w ścieżce programu

# Dodatkowa konfiguracja :memo:
Z pewnych powodów ustaliłem, że dobrym pomysłem będzie zrobienie bezsensownej opcionalnej konfuguracji.
Webhook sam w sobie nie potrzebuje żadnej konfiguracji innej niż wpisanie tokenów.

### Interwał szukania wiadomości (searchInterval)
Wartość odpowiadająca za jak często hook ma zbierać wiadomości w milisekundach.
Czym mniejsza wartość tym szybciej będzie zbierać wiadomości.
Nie dawaj mniej niż 10000.
Domyślnie pobiera wiadomości co pół minuty więc jest bardziej niż wystarczająco.

### Limit wiadomości (fetchMessageLimit)
Librus będzie pobierał tyle ostatnich wiadomości i sprawdzał czy nie są one już przeczytane.
Jeśli nauczyciele wyślą 4 wiadomości, a ty masz ustawione na 3, hook pominie 1 wiadomość i ją po prostu nie przeczyta.
Bez sensu ten limit bo i tak jakoś nie spowalnia mocno działania programu :shrug:, ale jeśli ktoś chce to ma taką opcję

# Podziękowania
[Mati365](https://github.com/Mati365) - Za ~~całkiem dobre~~ [API](https://github.com/Mati365/librus-api) (które i tak nie będzie za chwilę działać), bez którego ten hook by nie istniał

# FAQ
- Czy można dostać bana na librusie? - *Chyba* nie. Używam go codziennie od prawie roku i nic się nie dzieje, co nie znaczy, że Ci się nic nie stanie
- Mam problem, jak mogę się z Tobą skontaktować? - Discord: oogooro#8708 - Dodaj do znajomych (uwaga anime na profilowym) - pierwszy napisz do mnie

# Ostrzeżenie
Nie ponoszę odpowiedzialności na żadne spowodowane straty np. ban na librusie, nagana od wychowawcy za przyznanie się do używania tego