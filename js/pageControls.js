import {
  home,
  universe,
  exploration,
  main,
} from './elements.js'

function controllBackground() {
  const { pathname } = window.location

  if(pathname == '/') {
    home.classList.add('active')
    universe.classList.remove('active')
    exploration.classList.remove('active')
  
    main.classList.add('home')
    main.classList.remove('universe')
    main.classList.remove('exploration')
    return
  }
  
  if(pathname == '/universe') {
    universe.classList.add('active')
    home.classList.remove('active')
    exploration.classList.remove('active')
  
    main.classList.add('universe')
    main.classList.remove('home')
    main.classList.remove('exploration')
    return
  }
  
  if(pathname == '/exploration') {
    exploration.classList.add('active')
    home.classList.remove('active')
    universe.classList.remove('active')
  
    main.classList.add('exploration')
    main.classList.remove('home')
    main.classList.remove('universe')
    return
  } 
}

export {
  controllBackground
}