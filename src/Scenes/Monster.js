class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.arm1 = this.add.sprite(this.bodyX + 150, this.bodyY - 10, "monsterParts", "arm_greenD.png");
        my.sprite.arm2 = this.add.sprite(this.bodyX - 150, this.bodyY - 10, "monsterParts", "arm_greenD.png");
        //flip the second arm horizontally
        my.sprite.arm2.flipX = true;
        //rotate arms upwards
        my.sprite.arm1.angle = -100;
        my.sprite.arm2.angle = 100;
        my.sprite.leg1 = this.add.sprite(this.bodyX + 50, this.bodyY + 120, "monsterParts", "leg_greenD.png");
        my.sprite.leg2 = this.add.sprite(this.bodyX - 50, this.bodyY + 120, "monsterParts", "leg_greenD.png");
        //flip the second leg horizontally
        my.sprite.leg2.flipX = true;
        my.sprite.eye1 = this.add.sprite(this.bodyX, this.bodyY - 30, "monsterParts", "eye_cute_light.png");
        //make eye larger
        my.sprite.eye1.setScale(1.2);
        //mouth
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY + 30, "monsterParts", "mouth_closed_sad.png");
        //smile
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY + 30, "monsterParts", "mouthA.png");
        my.sprite.smile.visible = false;  // start with smile hidden
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY + 30, "monsterParts", "mouthB.png");
        my.sprite.fangs.visible = false;  // start with fangs hidden
        // head accesories
        my.sprite.horn1 = this.add.sprite(this.bodyX + 60, this.bodyY - 65, "monsterParts", "detail_dark_horn_small.png");
        //flip the second horn horizontally
        my.sprite.horn2 = this.add.sprite(this.bodyX - 60, this.bodyY - 65, "monsterParts", "detail_dark_horn_small.png");
        my.sprite.horn2.flipX = true;
        // scale both horns up
        my.sprite.horn1.setScale(1.3);
        my.sprite.horn2.setScale(1.3);
        my.sprite.antenna1 = this.add.sprite(this.bodyX + 10, this.bodyY - 100, "monsterParts", "detail_green_antenna_small.png");
        my.sprite.antenna1.setScale(1.3);

        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        let aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        let dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // Add event listeners for the D and S keys where D is dimple and S is smile
        sKey.on('down', () => {
            console.log("S key was pressed (event listener)");
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        });
        fKey.on('down', () => {
            console.log("F key was pressed (event listener)");
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        });
        // Add event listeners for the A and D keys where A moves left and D moves right
        aKey.on('down', () => {
            console.log("A key was pressed (event listener)");
            my.sprite.body.x -= 50;
            my.sprite.arm1.x -= 50;
            my.sprite.arm2.x -= 50;
            my.sprite.leg1.x -= 50;
            my.sprite.leg2.x -= 50;
            my.sprite.eye1.x -= 50;
            my.sprite.mouth.x -= 50;
            my.sprite.smile.x -= 50;
            my.sprite.fangs.x -= 50;
            my.sprite.horn1.x -= 50;
            my.sprite.horn2.x -= 50;
            my.sprite.antenna1.x -= 50;
        });
        dKey.on('down', () => {
            console.log("D key was pressed (event listener)");
            my.sprite.body.x += 50;
            my.sprite.arm1.x += 50;
            my.sprite.arm2.x += 50;
            my.sprite.leg1.x += 50;
            my.sprite.leg2.x += 50;
            my.sprite.eye1.x += 50;
            my.sprite.mouth.x += 50;
            my.sprite.smile.x += 50;
            my.sprite.fangs.x += 50;
            my.sprite.horn1.x += 50;
            my.sprite.horn2.x += 50;
            my.sprite.antenna1.x += 50;
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
    }

}