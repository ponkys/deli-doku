import { Component, OnInit } from '@angular/core';
import { VideoBackgroundService } from '../video-background.service';
import { WindowRefService } from '../window-ref.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public video;
    public mobileScreen = true;
    public isHomeComponent: false;

    myStyle: object = {};
    myParams: object = {};
    width = 100;
    height = 100;

    constructor(
        private videoBackgroundService: VideoBackgroundService,
        private winRef: WindowRefService
    ) {
        if (this.winRef.nativeWindow.innerWidth > 768) {
            this.mobileScreen = false;
        }
    }

    ngOnInit() {
        // this.video = this.videoBackgroundService.randomVideo();
        this.myStyle = {
            'position': 'absolute',
            'width': '100vw',
            'height': '100vh',
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };

        this.myParams = {
            particles: {
                number: {
                  value: 19,
                  density: {
                    enable: true,
                    value_area: 315.65905665290904
                  }
                },
                color: {
                  value: '#70c9c5'
                },
                shape: {
                  type: 'circle',
                  stroke: {
                    width: 0,
                    color: '#70c9c5'
                  },
                  polygon: {
                    nb_sides: 10
                  },
                  image: {
                    src: 'img/github.svg',
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: false,
                  distance: 0,
                  color: '#ffffff',
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 3.206824121731046,
                  direction: 'none',
                  random: true,
                  straight: false,
                  out_mode: 'out',
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: 'canvas',
                events: {
                  onhover: {
                    enable: false,
                    mode: 'repulse'
                  },
                  onclick: {
                    enable: false,
                    mode: 'push'
                  },
                  resize: false
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true

        };
    }

    facebookNavigate() {
        window.open('https://www.facebook.com/delidokubp/', '_blank');
    }

}
