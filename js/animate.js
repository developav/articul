const tl = new TimelineMax();
tl.from(".first__advantages-list", 1, {translateY: -400,opacity: 0,scale: 1,})
tl.to(".first__advantages-item", 1, {width:"fit-content"})
tl.to(".first__advantages-item1", 1, {translateY: -40,translateX: -12,opacity: 1,scale: 1,rotation: -30,})
tl.from(".first__heading-group", 1, {opacity: 0,})
tl.from(".last__descr-list", 1, {translateY: -400,opacity: 0,})
tl.from(".first__text", 1, {opacity: 0,})

  