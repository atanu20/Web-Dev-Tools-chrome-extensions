// Simple example, see optional options for more configuration.
let panel=document.getElementById('panel');

const pickr = Pickr.create({
    el: '.color-picker',
   

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

pickr.on('change', (...args) => {
    let color=args[0].toRGBA();
   
    let bgg=`rgba(${color[0]},${color[1]},${color[2]},${color[3]})`;
    panel.style.backgroundColor=bgg;
   

});

