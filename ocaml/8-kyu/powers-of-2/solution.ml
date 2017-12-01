let powersOfTwo n =
  let rec aux lst =
    if List.length lst <= n then
      aux (List.hd lst * 2::lst)
    else
      List.rev lst
  in aux [1]
