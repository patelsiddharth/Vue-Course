new Vue({
    el : '#app',
    data : {
        title : 'Guide to vue basics',
        name : 'Siddharth',
        counter : 0,
        coOrds : {
            x : 0,
            y : 0
        }
    },
    methods : {
        greeting(){
            return `My name is ${this.name}`;
        },
        Increment()
        {
            this.counter++;
        },
        Decrement()
        {
            this.counter--;
        },
        Reset()
        {
            this.counter = 0;
        },
        logCoords(e)
        {
            this.coOrds.x = e.offsetX;
            this.coOrds.y = e.offsetY;
        }
    }
})