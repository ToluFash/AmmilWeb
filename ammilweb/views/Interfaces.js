
class MouseListener {


    mouseClicked(e){

    }
    mouseEntered(e){
    }
    mouseLeave(e){

    }
    mouseMoved(e){

    }
    mouseOut(e){

    }
    mouseOver(e){


    }
    mouseDown(e){

    }
    mouseUp(e){

    }
}
class ComponentListener {

    componentResized(e){
    }
}
class KeyListener {

    keyPressed(e){

    }
}
class ScrollListener{

    scrolled(e){

    }
}
class ScreenChange{
hfh(){

    this.componentResized();
    this.addComponentListener(this)
}
    componentResized(e){
        if (screen.width >= 1920){

            this.d1920();
            return;
        }
        if (screen.width >= 1566){


            this.d1566();
            return;
        }
        if (screen.width >= 1536){


            this.d1536();
            return;
        }
        if (screen.width >= 1366){


            this.d1366();
            return;
        }
        if (screen.width >= 1280){


            this.d1280();
            return;
        }
        if (screen.width >= 1024){


            this.d1024();
            return;
        }
        if (screen.width >= 768){


            this.d768();
            return;
        }
        if (screen.width >= 540){


            this.d540();
            return;
        }
        if (screen.width >= 414){


            this.d414();
            return;
        }
        if (screen.width >= 375){


            this.d375();
            return;
        }
        if (screen.width >= 360){


            this.d360();
            return;
        }
        this.d320();
        return;
    };



    d1920(){

    }
    d1566(){

    }
    d1536(){

    }
    d1366(){

    }
    d1280(){

    }
    d1024(){

    }
    d768(){

    }
    d540(){

    }
    d414(){

    }
    d375(){

    }
    d360(){

    }
    d320(){

    }
}