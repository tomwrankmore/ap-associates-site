function transitionHelper(transName, pageFrom, pageTo, leaveFunc, ...enterFunctions) {
    let returnedObj = {
        name: transName,
        from: { namespace: [pageFrom] },
        to: { namespace: [pageTo] },
        leave: ({ current }) => { return leaveFunc(current.container) },
        enter({ next }) {
            enterFunctions
        }
    }
    
    return returnedObj
}

// call it like:

let value = transitionHelper('home-to-contact','home','contact', homeLeave, [contactEnter(next.container), borderBottom(next.container)])

console.log(value)

// {
//     name: 'home-to-contact',
//     from: { namespace: ['home'] },
//     to: { namespace: ['contact'] },
//     leave: ({ current }) => { return homeLeave(current.container) },
//     enter({ next }) {
//       contactEnter(next.container)
//       borderBottom(next.container)
//     }
//   },