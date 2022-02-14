@echo off
color e

echo "CZYTAJ WSZYSTKO UWAŻNIE!!!"
echo "Za chwilę nastąpi instalowanie wymaganych modułów"
echo "Upewnij się, że masz zainstalowane Node.js wersja LTS, https://nodejs.org/"
echo ""
pause
cls
echo "Nie przejmuj się ostrzeżeniami o zdeprecionowaniu"
npm i
echo ""
echo "Jeśli nie ma błędów powyżej, znaczy to, że pomyślnie zainstalowano wszystkie moduły"
echo ""
echo "Teraz należy wprowadzić login, hasło i url webhooka"
echo "Jeśli dane zostaną wpisane niepoprawnie można je zawsze zmienić otwierając plik: ZMIEŃ DANE LOGOWANIA.BAT"
echo ""
pause
npm run init
echo ""
echo "Teraz możesz już uruchomić program otwierając plik: BOT.bat"
echo "Nie musisz już nigdy więcej otwierać obecnego pliku"
echo ""
pause