const hotels = document.getElementById('variant'),
  google = document.getElementById('google');

function openNewWin() {
  myWin = open('hotels/Coliseum/hotelsColiseum.html');
}

function openNewWinGoogle() {
  myWin = open(
    'https://www.google.com/travel/things-to-do/see-all?g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4597339%2C4649665%2C4722900%2C4723331%2C4733969%2C4757164%2C4758493%2C4762561&hl=uk-US&gl=us&ssta=1&dest_mid=%2Fm%2F02j9z&dest_state_type=sattd&dest_src=ts&q=%D0%B4%D0%BE%D1%81%D1%82%D0%BE%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%87%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B0%D0%B2%D1%81%D1%82%D1%80%D0%B0%D0%BB%D0%B8%D0%B8&sa=X&ved=2ahUKEwisk6eA8-P3AhWkjokEHXGIAjEQuL0BKAZ6BAgLEDc&tcfs=EhgKCC9tLzAyajl6EgzQhNCy0YDQvtC_0LA&rf=EuMBCg0vZy8xMWJjNThsMTN3EhPQndCwINC_0YDQuNGA0L7QtNGWMA4iuAEKWmh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ltYWdlcy9pY29ucy9tYXRlcmlhbC9zeXN0ZW1fZ20vMXgvZmlsdGVyX3ZpbnRhZ2VfZ21fYmx1ZV8yMGRwLnBuZxJaaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vaW1hZ2VzL2ljb25zL21hdGVyaWFsL3N5c3RlbV9nbS8yeC9maWx0ZXJfdmludGFnZV9nbV9ibHVlXzIwZHAucG5nKAE'
  );
}

hotels.addEventListener('click', openNewWin);
google.addEventListener('click', openNewWinGoogle);
