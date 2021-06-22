# Cel :e-mail:
Okazało się, że mamy pandemię. Nie można wychodzić z domu, a lekcję odbywają się zdalnie. Często nauczyciele nie są bardzo ogarnięci i po prostu co każdą lekcję wysyłają nowe linki do Zoom'a **, od teraz musisz odświerzać pocztę librusa co kilka sekund, aby niedaj Boże spóźnić się minutę, bo cię już nie wpuszczą z poczekalni**. Od teraz dzięki temu programowi nie musisz już się nawet logować na librusa bo zrobi to za Ciebie i wyśle na Discorda!!! (którego i tak cały czas pewnie używasz) **JESCZE W DODATKU OZNACZY TĄ WIADOMOŚĆ JAKO PRZCZYTANĄ!** więc na lekcjach wysyłanych zawsze masz obecność. (czy to nie wspaniale?) :man_technologist:

### Program oferuje
- Automatyczne odczytanie wiadomości
- Fake obecność na każdej "wysyłanej" lekcji
- Wysłanie wiadomości na kanał Discord, gdzie możesz łatwo je wszystkie przeglądać

# Wymagania :cd:
- [Node.js](https://nodejs.org) >v12 lub ostatnia LTS
- npm, który i tak przychodzi z nodem

# Jak uruchomić? :clipboard:
## Pierwsze uruchomienie
1. Wpisz `npm i` w konsolce na tej samej ścieżce co jest `index.js`, aby zainstalować potrzebne (lub niekoniecznie) moduły
2. Otwórz `tokens.json` i wpisz *poprawne* dane
   1. libruslogin - login do librusa jak sama nazwa mówi np. `69420666u`
   2. libruspass - hasło do Twojego konta librusa
   3. webhooktoken - token do webhooka - Ustawienia kanału -> Integracje -> Webhooki -> Skopiuj adres URL webhooka -> URL w przeglądarkę -> skopuj wartość `token`
   4. webhookid - podobnie jak poprzedni tylko skopiuj wartość `id`
4. Wpisz `node .`

## Dalsze uruchamiania
1. w konsolce `node .` na tej samej ścieżce co pliki

# Konfiguracja :memo:
Z pewnych powodów ustaliłem, że dobrym pomysłem będzie zrobienie bezsensownej opcionalnej konfuguracji.
Webhook sam w sobie nie potrzebuje jakiejkolwiek konfuguracji innej niż wpisanie tokenów, więc niższa część tylko dla full nerdów/hackerów.

### Język (lang)
Języki można łatwo dodawać lub edytować zmieniając pliki w folderze `lang`.
Języki do wybrania:
- `pl` - język polski (obv)
- `en` - nie zgadniesz

### Interwał szukania wiadomości (searchInterval)
Wartość odpowiadająca za jak często hook ma się logować za Ciebie w milisekundach.
Czym mniejsza wartość tym szybciej będzie """działać""".
Nie dawaj mniej niż 10000 chyba, że chcesz być tym nerdem *co tak bardzo uwielbia naukę, że odświerza librusa co <10 sekund*.
Domyślnie pobiera wiadomości co pół minuty więc jest bardziej niż wystarczająco.

### Limit wiadomości (fetchMessageLimit)
Librus będzie pobierał tyle ostatnich wiadomości i sprawdzał czy nie są one już przeczytane.
Jeśli nauczyciele wyślą 4 wiadomości, a ty masz ustawione na 3, hook pominie 1 wiadomość i ją po prostu nie przeczyta.
Bez sensu ten limit bo i tak jakoś nie spowalnia mocno działania programu :shrug: , ale jeśli ktoś chce to ma taką opcję

# Podziękowania
[Mati365](https://github.com/Mati365) - Za całkiem dobre [API](https://github.com/Mati365/librus-api), bez którego hook by nie istniał

# FAQ
- Czy można dostać bana na librusie? - *Chyba* nie. Używam go codziennie od kilku miesięcy i nic się nie dzieje
- Mam problem, jak mogę się z Tobą skontaktować? - Discord: oogooro#8708 (uwaga anime na profilowym)
