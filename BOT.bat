@echo off
node .

color e
echo ""
echo "Wygląda na to, że program się zakończył, co nigdy bez ingeracji nie powinno się zdarzyć, na górze najprawdopodobniej masz opisany błąd"
echo "Może być wiele powodów dlaczego tak się stało, niżej lista paru z nich:"
echo "1. Plik instalacyjny (TEN PLIK NAJPIERW OTWÓRZ.bat) nie został uruchomiony"
echo "2. Zła wersja Node.js, sprawdź czy masz wersję LTS wyższą niż 16.13.0"
echo "3. Librus po prostu jest niedostępny, spróbuj jeszcze raz za chwilę"
echo "4. Złe dane logowania lub webhook - Otwórz plik: ZMIEŃ DANE LOGOWANIA.BAT"
pause
