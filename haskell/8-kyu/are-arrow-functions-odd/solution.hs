module Odds where

isOdd n = n `mod` 2 == 1

odds :: [Int] -> [Int]
odds = filter isOdd
