let rec last xs =
  match xs with
  | [] -> None
  | [x] -> Some x
  | x::xs -> last xs
