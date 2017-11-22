(ns how-do-i-compare)

(defn what-is [x]
  (cond
    (identical? x 42) "everything"
    (= x (* 42 42)) "everything squared"
    :else "nothing"))
