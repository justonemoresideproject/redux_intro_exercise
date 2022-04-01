const face = document.querySelector('#face')
const happyBtn = document.querySelector('#happyBtn')
const sadBtn = document.querySelector('#sadBtn')
const angryBtn = document.querySelector('#angryBtn')
const confusedBtn = document.querySelector('#confusedBtn')

happyBtn.addEventListener('click', function (e) {
    store.dispatch({ type: 'happy' })
    const state = store.getState();
    face.innerText = state.count;
})

sadBtn.addEventListener('click', function (e) {
    store.dispatch({ type: 'sad' })
    const state = store.getState();
    face.innerText = state.count;
})

angryBtn.addEventListener('click', function (e) {
    store.dispatch({ type: 'angry' })
    const state = store.getState();
    face.innerText = state.count;
})

confusedBtn.addEventListener('click', function (e) {
    store.dispatch({ type: 'confused' })
    const state = store.getState();
    face.innerText = state.count;
})