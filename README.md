# TO JEST WERSJA EKSPERYMENTALNA, ZMERGUJĘ NA MAINA JAK JAKIŚ NAUCZYCIEL W KOŃCU WYŚLE DŁUGĄ WIADOMOŚĆ NA KILKA EMBEDÓW
# Hook oferuje :keyboard:
- Automatyczne odczytywanie wiadomości
- *Fake* obecność na każdej "wysyłanej" lekcji
- Wysłanie wiadomości na kanał Discord, gdzie można je łatwo przeglądać

# Wymagania :dvd:
- [Node.js](https://nodejs.org) v16.6.0 lub nowsza i żadna inna (jeśli masz win7 i nie możesz zainstalować to kliknij [tutaj](https://basewin.pl/) albo [tutaj](https://ubuntu.com/download), aby pobrać lepszy system)
- npm, który i tak już przychodzi z nodem

# Jak uruchomić? :clipboard:
## Pierwsze uruchomienie
1. Wpisz `npm i` w konsolce na tej samej ścieżce co jest `index.js`, aby zainstalować potrzebne (lub niekoniecznie) moduły
2. Otwórz `tokens.json` i wpisz *poprawne* dane
   1. librusLogin - login do librusa jak sama nazwa mówi np. `69420666u`
   2. librusPass - hasło do Twojego konta librusa
   3. webhookUrl - Url webhooka - Ustawienia kanału -> Integracje -> Webhooki -> Skopiuj adres URL webhooka
```json
{
    "lubrusLogin": "69420666u",
    "librusPass": "5up3rT4jn3Ha5l0",
    "webhookUrl": "https://discord.com/api/webhooks/h00k1D/h00kT0k3n"
}
```
4. Wpisz `node .`

## Dalsze uruchamiania
1. w konsolce `node .` na tej samej ścieżce co pliki

# Konfiguracja :memo:
Z pewnych powodów ustaliłem, że dobrym pomysłem będzie zrobienie bezsensownej opcionalnej konfuguracji.
Webhook sam w sobie nie potrzebuje żadnej konfiguracji innej niż wpisanie tokenów.

### Język (lang)
Języki można łatwo dodawać lub edytować zmieniając pliki w folderze `lang`.
Języki do wybrania:
- `pl` - język polski
- `en` - nie zgadniesz

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
[Mati365](https://github.com/Mati365) - Za całkiem dobre [API](https://github.com/Mati365/librus-api), bez którego ten hook by nie istniał

# FAQ
- Czy można dostać bana na librusie? - *Chyba* nie. Używam go codziennie od kilku miesięcy i nic się nie dzieje
- Mam problem, jak mogę się z Tobą skontaktować? - Discord: oogooro#8708 (uwaga anime na profilowym)
