def maskify(cc)
  "#" * [cc.size - 4, 0].max + cc.slice(-[cc.size, 4].min, 4)
end