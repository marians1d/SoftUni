from project.tennis_player import TennisPlayer

import unittest

class TestTennisPlayer(unittest.TestCase):
    def setUp(self):
        self.player1 = TennisPlayer("Roger Federer", 39, 1000)
        self.player2 = TennisPlayer("Rafael Nadal", 35, 900)

    def test_init(self):
        self.assertEqual(self.player1.name, "Roger Federer")
        self.assertEqual(self.player1.age, 39)
        self.assertEqual(self.player1.points, 1000)
        self.assertEqual(self.player1.wins, [])

    def test_name_raises(self):
        with self.assertRaises(ValueError) as ex:
            self.player1.name = "R"
        self.assertEqual(str(ex.exception), "Name should be more than 2 symbols!")

    def test_name_raises_equal(self):
        with self.assertRaises(ValueError) as ex:
            self.player1.name = "Ra"
        self.assertEqual(str(ex.exception), "Name should be more than 2 symbols!")

    def test_name(self):
        self.player1.name = "Rafael Nadal"
        self.assertEqual(self.player1.name, "Rafael Nadal")

    def test_age_raises(self):
        with self.assertRaises(ValueError) as ex:
            self.player1.age = 17
        self.assertEqual(str(ex.exception), "Players must be at least 18 years of age!")

    def test_age(self):
        self.player1.age = 40
        self.assertEqual(self.player1.age, 40)

    def test_add_new_win(self):
        self.assertEqual(self.player1.add_new_win("Wimbledon"), None)
        self.assertEqual(self.player1.add_new_win("Wimbledon"), "Wimbledon has been already added to the list of wins!")

    def test_lt_true(self):
        result = self.player2 < self.player1

        self.assertEqual(result, "Roger Federer is a top seeded player and he/she is better than Rafael Nadal")

    def test_lt_false(self):
        result = self.player1 < self.player2

        self.assertEqual(result, "Roger Federer is a better player than Rafael Nadal")

    def test_str(self):
        self.player1.add_new_win("Wimbledon")
        self.player1.add_new_win("US Open")
        result = str(self.player1)

        self.assertEqual(result, "Tennis Player: Roger Federer\nAge: 39\nPoints: 1000.0\nTournaments won: Wimbledon, US Open")

if __name__ == '__main__':
    unittest.main()
