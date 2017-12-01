// Working, non-golf implementation:
circleIntersection = ([x1,y1], [x2,y2], r) => {
  const d = Math.hypot(x1 - x2, y1 - y2)
  if (d > r * 2) return 0
  const θ = 2 * Math.acos(d / (2 * r))
  const As = θ / 2 * (r * r)
  const At = 1 / 2 * (r * r) * Math.sin(θ)
  return Math.floor((As - At) * 2)
}

// attempted golf without hints:
with(Math){circleIntersection=([s,t],[u,v],r)=>{
θ=2*acos(hypot(s-u,t-v)/(2*r))
return !θ?0:~~((θ/2*r*r-1/2*r*r*sin(θ))*2)
}}

// myjinxin2015's hint:
// w###(M###){c#####I###########=([###],[###],#)##(-###(#=#*####(#####(#-#,#-#)/#/#))+#)*#*#|#}
// with(Math){circleIntersection=([s,t],[u,v],r)=>(-sin(θ=2*acos(hypot(s-u,t-v)/r/2))+θ)*r*r|0}
