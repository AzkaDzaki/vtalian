AFRAME.registerComponent('wall-audio', {
    schema: {

    },
    update: async function () {
        let wall_audio = await fetchMap("https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/json/wall-audio.json");
        wall_audio.wall_audio.forEach(element => {
          const audio = document.createElement('a-box');
          setAttributes(audio, {"id": element.id, "rotation": element.rotation, "position": element.position, "sound": element.sound+"volume:5", "class": "audio-entity pause", "geometry":"height: 1.000; width: 0.100", "material":"src: https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/img/topcoat_audio.png;shader:flat; color: #FFF; transparent: true;", "crossorigin":"anonymous", "animation__scale":"property: scale; to: 1.1 1.1 1.1; dur: 200; startEvents: mouseenter", "animation__scale_reverse":"property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"})
          document.getElementById("wall_audio").appendChild(audio);
        

        var els = document.getElementById(element.id); 
        console.log(els);
        els.addEventListener('click', function (e) {
            if(els.classList.contains("pause")){
                if(document.getElementsByClassName("play").length !== 0){
                    var playing = document.getElementsByClassName("play")[0];
                    playing.components.sound.stopSound();
                    playing.classList.remove("play");
                    playing.classList.add("pause");
                    console.log(playing)
                }
                els.components.sound.playSound();
                els.classList.remove("pause");
                els.classList.add("play");
                console.log(document.getElementsByClassName("play").length);
                console.log(els);
            }
            else if(els.classList.contains("play")){
                els.components.sound.stopSound();;
                els.classList.remove("play");
                els.classList.add("pause");
                console.log(els);
            }

        });
    });
    },});