

<style>
    .angry-grid {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 1px;
        justify-content: center;
        align-items: center;
        justify-items: center;
        align-content: center;
        border-bottom: 1px solid #fff;
    }

    .angry-grid a.active {
        border: 2px solid red;
    }

    .tab-pane {
        display: none;
    }

    .tab-pane.active {
        display: block;
    }

    [id*="wwc_room_item_"]:hover {
        background-color: yellow;
        color: black;
    }

    [id*="wwc_room_item_"] a:hover {
        color: black;
    }

    .modal {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 15px;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.88);
        -webkit-animation-duration: 0.35s;
        animation-duration: 0.35s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation-name: fadeIn;
        animation-name: fadeIn;
        /* Modifiers */
        /* States */
    }

    .modal__dialog {
        position: relative;
        max-width: 500px;
        padding: 20px;
        margin: auto;
        border-radius: 4px;
        background-color: #fff;
    }

    .modal__close {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        border: none;
        color: #ccc;
        background-color: transparent;
        background-image: none;
    }

    .modal__close:focus {
        outline: 0;
    }

    .modal__header {
        border-bottom: 1px solid #e2e2e2;
    }

    .modal__title {
        margin: 0 0 15px;
    }

    .modal__content {
        padding: 10px 0;
        font-size: 13px;
        line-height: 1.6;
        color: #555;
    }

    .modal__footer {
        padding-top: 20px;
        border-top: 1px solid #e2e2e2;
        text-align: right;
    }

    .modal--fullscreen {
        padding: 5px;
    }

    .modal--fullscreen .modal__dialog {
        width: 100%;
        max-width: none;
        height: 100%;
        border-radius: 0;
    }

    .modal.is-modal-active {
        display: flex;
    }

    .apoio-aqui {
        display: flex;
        align-content: center;
        justify-content: space-around;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        border-bottom: 2px solid #fff;
        padding-bottom: 8px;
    }

    .sprite {
        background-image: url(https://asserts.wormworld.io/images/flags_region.png);
        background-repeat: no-repeat;
        background-size: 135px 120px;
        display: block;
        margin: 6px 0;
    }

    .sprite-ae-flag {
        width: 40px;
        height: 25px;
        background-position: -3px -4px;
    }

    .sprite-au-flag {
        width: 40px;
        height: 25px;
        background-position: -48px -3px;
    }

    .sprite-br-flag {
        width: 40px;
        height: 25px;
        background-position: -2px -33px;
    }

    .sprite-ca-flag {
        width: 40px;
        height: 25px;
        background-position: -48px -33px;
    }

    .sprite-fr-flag {
        width: 40px;
        height: 25px;
        background-position: -2px -62px;
    }

    .sprite-de-flag {
        width: 40px;
        height: 25px;
        background-position: -48px -62px;
    }

    .sprite-jp-flag {
        width: 40px;
        height: 25px;
        background-position: -48px -92px;
    }

    .sprite-mx-flag {
        width: 40px;
        height: 25px;
        background-position: -92px -3px;
    }

    .sprite-sg-flag {
        width: 40px;
        height: 25px;
        background-position: -92px -33px;
    }

    .sprite-uk-flag {
        width: 40px;
        height: 25px;
        background-position: -92px -92px;
    }

    .sprite-us-flag {
        width: 40px;
        height: 25px;
        background-position: -92px -92px;
    }
</style>
<div id="load_page_apoiador">
    <div class="title-worm-world-connect" style="position: absolute; top: 0; z-index: 1; width: 92%">
        <img src="https://asserts.wormworld.io/images/favicon64x64.png" width="20" align="center" alt />
WormWorld Connect
    </div>
    <div style="height: 285px; overflow: auto; border: 1px solid; margin: 6px auto" id="wwc_tabs">
        <div class="angry-grid f32">
            <a href="#tabs0" id="linktab_0">
                <i class="sprite sprite-br-flag"></i>
            </a>
            <a href="#tabs1" id="linktab_1">
                <i class="sprite sprite-us-flag"></i>
            </a>
            <a href="#tabs2" id="linktab_2">
                <i class="sprite sprite-ca-flag"></i>
            </a>
            <a href="#tabs3" id="linktab_3">
                <i class="sprite sprite-mx-flag"></i>
            </a>
            <a href="#tabs4" id="linktab_4">
                <i class="sprite sprite-de-flag"></i>
            </a>
            <a href="#tabs5" id="linktab_5">
                <i class="sprite sprite-fr-flag"></i>
            </a>
            <a href="#tabs6" id="linktab_6">
                <i class="sprite sprite-sg-flag"></i>
            </a>
            <a href="#tabs7" id="linktab_7">
                <i class="sprite sprite-jp-flag"></i>
            </a>
            <a href="#tabs8" id="linktab_8">
                <i class="sprite sprite-au-flag"></i>
            </a>
            <a href="#tabs9" id="linktab_9">
                <i class="sprite sprite-ae-flag"></i>
            </a>
        </div>
        <div class="tab-pane" id="tabs0" style="display: none">
            <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sao-a.wormate.io:30560/wormy" data-room="1br" data-type="false">
                    <strong>
01 &nbsp;CLÃ-DESTINO
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_CLADESTINO.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sao-a.wormate.io:31713/wormy" data-room="2br" data-type="false">
                    <strong>
02 &nbsp;Øℭℭ 💣ØRĐEM ℭØM ℭĀØS💣
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_ORDEM.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sao-a.wormate.io:31750/wormy" data-room="3br" data-type="false">
                    <strong>
03 &nbsp;FX
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_FXNOVO.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sao-a.wormate.io:31713/wormy" data-room="4br" data-type="false">
                    <strong>
04 &nbsp;BLACK &amp; GAB
</strong>
                </div>
                <a href="https://www.tiktok.com/@blackdagab" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_BLACKGAB.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dal-b.wormate.io:31750/wormy" data-room="5br" data-type="false">
                    <strong>
05 &nbsp;🎭FAMÍLIA ⅤǤÐ🎭
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_VGA.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dal-b.wormate.io:30135/wormy" data-room="6br" data-type="false">
                    <strong>
06 &nbsp;FAMÍLIA SLS
</strong>
                </div>
                <a href="https://www.youtube.com/channel/UCQdqHIm5kx-iAWOmasBSumQ" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_SLS.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dal-b.wormate.io:30135/wormy" data-room="7br" data-type="false">
                    <strong>
07 &nbsp;FAMÍLIA CSG
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_CSG.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_8" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sao-a.wormate.io:31975/wormy" data-room="8br" data-type="false">
                    <strong>
08 &nbsp;ɢʅ DAVID RAPU®️ 🐛
</strong>
                </div>
                <a href="https://www.facebook.com/GLDavidRapu" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_DAVID.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_9" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sao-a.wormate.io:31091/wormy" data-room="9br" data-type="false">
                    <strong>
09 &nbsp;Tik Tok 💥 Duchine 💥 Falido
</strong>
                </div>
                <a href="https://www.tiktok.com/@duchinepereira?_t=8eOyrFS8Oqk&amp;_r=1" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_FALIDO.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_10" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sao-a.wormate.io:30809/wormy" data-room="10br" data-type="false">
                    <strong>
10 &nbsp;🎀 GANG DO LACINHO 🎀
</strong>
                </div>
                <a href="https://www.tiktok.com/@juhlacinho?_t=8lw2EJdkGJC&amp;_r=1" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_LACINHOS.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_11" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sao-a.wormate.io:32703/wormy" data-room="11br" data-type="false">
                    <strong>
11 &nbsp;PANTERA TIKTOK
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_pantera20game.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_12" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sao-a.wormate.io:31975/wormy" data-room="12br" data-type="false">
                    <strong>
12 &nbsp;CBLT COWBOY BRASIL
</strong>
                </div>
                <a href="https://www.tiktok.com/@cbltcowboybrasillivetik1?_t=8pE0LP2S36b&amp;_r=1" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_COWBOY02.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_13" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sao-a.wormate.io:30135/wormy" data-room="13br" data-type="false">
                    <strong>
13 &nbsp;TONY MATOS FDR
</strong>
                </div>
                <a href="https://www.facebook.com/profile.php?id=100068118378778" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_FDR_NOVO.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_14" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sao-a.wormate.io:30392/wormy" data-room="14br" data-type="false">
                    <strong>
14 &nbsp;FAMÍLIA VLP
</strong>
                </div>
                <a href="https://tiktok.com/@volpeof" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_VLP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_15" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sao-a.wormate.io:30171/wormy" data-room="15br" data-type="false">
                    <strong>
15 &nbsp;🦋Butterfly
</strong>
                </div>
                <a href="https://www.tiktok.com/@butterflyylive?_t=8l0kxGD4Mca&amp;_r=1" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_BORBOLETA.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
        </div>
        <div class="tab-pane" id="tabs1" style="display: none">
            <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://vin-a.wormate.io:30407/wormy" data-room="1us" data-type="false">
                    <strong>
01 &nbsp;【V】【I】【P】【E】【R】
</strong>
                </div>
                <a href="https://wormworld.io/team/aguz-gamer/" target="_blank">
                    <img src="https://i.imgur.com/ITJGELk.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dal-b.wormate.io:32584/wormy" data-room="2us" data-type="false">
                    <strong>
02 &nbsp;⎳𝕄℣🔱  LA MERA VENA 
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/EMq5Fie.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dal-b.wormate.io:31750/wormy" data-room="3us" data-type="false">
                    <strong>
03 &nbsp;SUPERMOD IMMY
</strong>
                </div>
                <a href="https://wormworld.io/team/lemanz-gaming/" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_IMMYSUPER.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://vin-a.wormate.io:32368/wormy" data-room="4us" data-type="false">
                    <strong>
04 &nbsp;[TL] THELYDER 🏴‍☠️
</strong>
                </div>
                <a href="https://www.facebook.com/thelyder1?mibextid=ZbWKwL" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_THELYDER.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:30162/wormy" data-room="5us" data-type="false">
                    <strong>
05 &nbsp;LEMANZ GAMING
</strong>
                </div>
                <a href="https://wormworld.io/team/lemanz-gaming/" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_LEMANZATUAL.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:30296/wormy" data-room="6us" data-type="false">
                    <strong>
06 &nbsp;DIABOLOS
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_DIABOLOS.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:32111/wormy" data-room="7us" data-type="false">
                    <strong>
07 &nbsp;TF WENDYS
</strong>
                </div>
                <a href="https://www.facebook.com/LaWendyss?mibextid=LQQJ4d" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_WENDS.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_8" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:32403/wormy" data-room="8us" data-type="false">
                    <strong>
08 &nbsp;FRANCO
</strong>
                </div>
                <a href="https://www.facebook.com/Francoaddiction" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_FRANCO.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_9" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://vin-a.wormate.io:32465/wormy" data-room="9us" data-type="false">
                    <strong>
09 &nbsp;HSG❤️      
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_MITCH.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_10" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:32111/wormy" data-room="10us" data-type="false">
                    <strong>
10 &nbsp;LA REYNA DEL SUR
</strong>
                </div>
                <a href="https://www.facebook.com/lareynadelsur28?mibextid=ZbWKwL" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_RDSNOVO.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_11" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:30296/wormy" data-room="11us" data-type="false">
                    <strong>
11 &nbsp;JUANCHITO
</strong>
                </div>
                <a href="https://www.facebook.com/JuanchitoUnGamerConCapacidadesDiferentes/" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_JUANCHITO.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_12" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:32746/wormy" data-room="12us" data-type="false">
                    <strong>
12 &nbsp;NRG
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_NRG04.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_13" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:30162/wormy" data-room="13us" data-type="false">
                    <strong>
13 &nbsp;DIABOLOS
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_DIABOLOS.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_14" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:30536/wormy" data-room="14us" data-type="false">
                    <strong>
14 &nbsp;GYA 09
</strong>
                </div>
                <a href="https://www.facebook.com/search/top?q=gya09" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_GYA.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_15" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:31279/wormy" data-room="15us" data-type="false">
                    <strong>
15 &nbsp;DON FRANKIE
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/DHk6puY.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_16" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:32091/wormy" data-room="16us" data-type="false">
                    <strong>
16 &nbsp;ALDO BLUE
</strong>
                </div>
                <a href="https://www.facebook.com/AldoBlue8?mibextid=ZbWKwL" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_ALDOBLUE.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_17" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:32214/wormy" data-room="17us" data-type="false">
                    <strong>
17 &nbsp;AGYMOTO (VIN)
</strong>
                </div>
                <a href="https://m.facebook.com/Agymoto-Gaming-103093945333005/" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/sala_58.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_18" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:30042/wormy" data-room="18us" data-type="false">
                    <strong>
18 &nbsp;J.BLIZZ
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/x1hmNeT.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_19" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:32746/wormy" data-room="19us" data-type="false">
                    <strong>
19 &nbsp;NEWS
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_20" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:30296/wormy" data-room="20us" data-type="false">
                    <strong>
20 &nbsp;NEWS
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_21" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dal-b.wormate.io:30135/wormy" data-room="21us" data-type="false">
                    <strong>
21 &nbsp;NEWS
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_22" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sao-a.wormate.io:30072/wormy" data-room="22us" data-type="false">
                    <strong>
22 &nbsp;2 TEAMS 3 NEWS
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_23" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:31000/wormy" data-room="23us" data-type="false">
                    <strong>
23 &nbsp;01 TEAMS
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_24" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:31555/wormy" data-room="24us" data-type="false">
                    <strong>
24 &nbsp;02 TEAMS
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_25" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://vin-a.wormate.io:30407/wormy" data-room="25us" data-type="false">
                    <strong>
25 &nbsp;NEW DRAGON BALL
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_26" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:31750/wormy" data-room="26us" data-type="false">
                    <strong>
26 &nbsp;NEW
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_27" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:30208/wormy" data-room="27us" data-type="false">
                    <strong>
27 &nbsp;NEW
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_28" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://vin-a.wormate.io:30332/wormy" data-room="28us" data-type="false">
                    <strong>
28 &nbsp;NEW TEST
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_29" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:32746/wormy" data-room="29us" data-type="false">
                    <strong>
29 &nbsp;NEW TEST
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_30" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://vin-a.wormate.io:30703/wormy" data-room="30us" data-type="false">
                    <strong>
30 &nbsp;WTR SERVER - VIRGÍNIA
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_31" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://vin-a.wormate.io:31026/wormy" data-room="31us" data-type="false">
                    <strong>
31 &nbsp;WTR SERVER - VIRGÍNIA
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_32" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://vin-a.wormate.io:31142/wormy" data-room="32us" data-type="false">
                    <strong>
32 &nbsp;WTR SERVER - VIRGÍNIA
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_33" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://vin-a.wormate.io:31211/wormy" data-room="33us" data-type="false">
                    <strong>
33 &nbsp;WTR SERVER - VIRGÍNIA
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_34" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://vin-a.wormate.io:31311/wormy" data-room="34us" data-type="false">
                    <strong>
34 &nbsp;WTR SERVER - VIRGÍNIA
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_35" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://vin-a.wormate.io:31516/wormy" data-room="35us" data-type="false">
                    <strong>
35 &nbsp;WTR SERVER - VIRGÍNIA
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_36" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://vin-a.wormate.io:32053/wormy" data-room="36us" data-type="false">
                    <strong>
36 &nbsp;WTR SERVER - VIRGÍNIA
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_37" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://vin-a.wormate.io:32212/wormy" data-room="37us" data-type="false">
                    <strong>
37 &nbsp;WTR SERVER - VIRGÍNIA
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_38" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sao-a.wormate.io:31163/wormy" data-room="38us" data-type="false">
                    <strong>
38 &nbsp;WTR SERVER - VIRGÍNIA
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_39" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://vin-a.wormate.io:32500/wormy" data-room="39us" data-type="false">
                    <strong>
39 &nbsp;WTR SERVER - VIRGÍNIA
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_40" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dal-b.wormate.io:30809/wormy" data-room="40us" data-type="false">
                    <strong>
40 &nbsp;WTR SERVER -DALLAS
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_41" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:30725/wormy" data-room="41us" data-type="false">
                    <strong>
41 &nbsp;WTR SERVER -HIL
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
        </div>
        <div class="tab-pane" id="tabs2" style="display: none">
            <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://hil-a.wormate.io:30162/wormy" data-room="1ca" data-type="false">
                    <strong>
01 &nbsp;J.BLIZZ
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/x1hmNeT.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dal-b.wormate.io:31091/wormy" data-room="2ca" data-type="false">
                    <strong>
02 &nbsp;NEWS-news
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dal-b.wormate.io:31230/wormy" data-room="3ca" data-type="false">
                    <strong>
03 &nbsp;NEWS-news
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dal-b.wormate.io:31282/wormy" data-room="4ca" data-type="false">
                    <strong>
04 &nbsp;NEWS-news
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dal-b.wormate.io:31290/wormy" data-room="5ca" data-type="false">
                    <strong>
05 &nbsp;NEWS-news
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dal-b.wormate.io:30135/wormy" data-room="6ca" data-type="false">
                    <strong>
06 &nbsp;NEWS- tiozão
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dal-b.wormate.io:30165/wormy" data-room="7ca" data-type="false">
                    <strong>
07 &nbsp;NEWS- news
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_8" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dal-b.wormate.io:30339/wormy" data-room="8ca" data-type="false">
                    <strong>
08 &nbsp;NEWS - FEG
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_9" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dal-b.wormate.io:31084/wormy" data-room="9ca" data-type="false">
                    <strong>
09 &nbsp;NEWS
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_10" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dal-b.wormate.io:30786/wormy" data-room="10ca" data-type="false">
                    <strong>
10 &nbsp;NEWS- tnt
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
        </div>
        <div class="tab-pane" id="tabs3" style="display: none">
            <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dal-b.wormate.io:32584/wormy" data-room="1mx" data-type="false">
                    <strong>
01 &nbsp;NRG
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_NRG04.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:30703/wormy" data-room="2mx" data-type="false">
                    <strong>
02 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:31211/wormy" data-room="3mx" data-type="false">
                    <strong>
03 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:32053/wormy" data-room="4mx" data-type="false">
                    <strong>
04 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:32212/wormy" data-room="5mx" data-type="false">
                    <strong>
05 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:30135/wormy" data-room="6mx" data-type="false">
                    <strong>
06 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:31216/wormy" data-room="7mx" data-type="false">
                    <strong>
07 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
        </div>
        <div class="tab-pane" id="tabs4" style="display: none">
            <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:32053/wormy" data-room="1de" data-type="false">
                    <strong>
01 &nbsp;GERMAN 01
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:32103/wormy" data-room="2de" data-type="false">
                    <strong>
02 &nbsp;GERMAN 02 
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:32609/wormy" data-room="3de" data-type="false">
                    <strong>
03 &nbsp;GERMAN 03
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:32064/wormy" data-room="4de" data-type="false">
                    <strong>
04 &nbsp;GERMAN 04
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:31965/wormy" data-room="5de" data-type="false">
                    <strong>
05 &nbsp;GERMAN 05
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:32285/wormy" data-room="6de" data-type="false">
                    <strong>
06 &nbsp;GERMAN 06
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:32026/wormy" data-room="7de" data-type="false">
                    <strong>
07 &nbsp;GERMAN 07
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_8" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:32262/wormy" data-room="8de" data-type="false">
                    <strong>
08 &nbsp;GERMAN 08
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_9" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:32095/wormy" data-room="9de" data-type="false">
                    <strong>
09 &nbsp;GERMAN 09
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_9" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
        <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:32053/wormy" data-room="1fr" data-type="false">
                    <strong>
01 &nbsp;FRANCE 01
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/1cEWl1a.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:32064/wormy" data-room="2fr" data-type="false">
                    <strong>
02 &nbsp;FRANCE 02
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/1cEWl1a.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:31965/wormy" data-room="3fr" data-type="false">
                    <strong>
03 &nbsp;FRANCE 03
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/1cEWl1a.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:32609/wormy" data-room="4fr" data-type="false">
                    <strong>
04 &nbsp;FRANCE 04
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/1cEWl1a.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:32103/wormy" data-room="5fr" data-type="false">
                    <strong>
05 &nbsp;FRANCE 05
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/1cEWl1a.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:32285/wormy" data-room="6fr" data-type="false">
                    <strong>
06 &nbsp;FRANCE 06
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/1cEWl1a.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:32026/wormy" data-room="7fr" data-type="false">
                    <strong>
07 &nbsp;FRANCE 07
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/1cEWl1a.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:32262/wormy" data-room="8fr" data-type="false">
                    <strong>
08 &nbsp;FRANCE 08
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/1cEWl1a.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_8" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:32095/wormy" data-room="9fr" data-type="false">
                    <strong>
09 &nbsp;FRANCE 09
</strong>
                </div>
                <a href="https://wormworld.io/active" target="_blank">
                    <img src="https://i.imgur.com/1cEWl1a.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_9" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-b.wormate.io:31764/wormy" data-room="1sg" data-type="false">
                    <strong>
01 &nbsp;BILHUDA MARCHELINO
</strong>
                </div>
                <a href="https://www.tiktok.com/@bilhuda_marchelino?_t=8nleahyHqI4&amp;_r=1" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_BILHUDA.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:31764/wormy" data-room="2sg" data-type="false">
                    <strong>
02 &nbsp;Kẹo Ngọt
</strong>
                </div>
                <a href="https://www.facebook.com/groups/familykeongot/?ref=share" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/sala_24.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:30165/wormy" data-room="3sg" data-type="false">
                    <strong>
03 &nbsp;EkagamingV2
</strong>
                </div>
                <a href="https://www.facebook.com/ekagamingV2" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/sala_43.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:32212/wormy" data-room="4sg" data-type="false">
                    <strong>
04 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:30703/wormy" data-room="5sg" data-type="false">
                    <strong>
05 &nbsp;AZ FAMILY
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_AZFAMILY.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:31211/wormy" data-room="6sg" data-type="false">
                    <strong>
06 &nbsp;TEM BPG
</strong>
                </div>
                <a href="https://wormworld.io/team/team-bpg/" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/sala_31.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-b.wormate.io:32677/wormy" data-room="7sg" data-type="false">
                    <strong>
07 &nbsp;NEW
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_8" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:31026/wormy" data-room="8sg" data-type="false">
                    <strong>
08 &nbsp;AMG
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_AMG.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_9" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:31211/wormy" data-room="9sg" data-type="false">
                    <strong>
09 &nbsp;NEW
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_10" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-b.wormate.io:31203/wormy" data-room="10sg" data-type="false">
                    <strong>
10 &nbsp;NEW
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_11" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:31026/wormy" data-room="11sg" data-type="false">
                    <strong>
11 &nbsp;CHERRYLAND&#39;S
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_CHERRY.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_12" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:30809/wormy" data-room="12sg" data-type="false">
                    <strong>
12 &nbsp;HOYWAN ZONE
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/team_HoyWanzone.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_13" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:32053/wormy" data-room="13sg" data-type="false">
                    <strong>
13 &nbsp;WTR SERVER- NEW 1
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_14" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-b.wormate.io:31764/wormy" data-room="14sg" data-type="false">
                    <strong>
14 &nbsp;WTR SERVER- NEW 1
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_15" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:30208/wormy" data-room="15sg" data-type="false">
                    <strong>
15 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_16" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:31533/wormy" data-room="16sg" data-type="false">
                    <strong>
16 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_17" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:31750/wormy" data-room="17sg" data-type="false">
                    <strong>
17 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_18" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:32677/wormy" data-room="18sg" data-type="false">
                    <strong>
18 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_19" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:31353/wormy" data-room="19sg" data-type="false">
                    <strong>
19 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_20" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:32053/wormy" data-room="20sg" data-type="false">
                    <strong>
20 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://www.facebook.com/ekagamingV2" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_21" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-b.wormate.io:30165/wormy" data-room="21sg" data-type="false">
                    <strong>
21 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_22" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-b.wormate.io:32677/wormy" data-room="22sg" data-type="false">
                    <strong>
22 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_23" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:32500/wormy" data-room="23sg" data-type="false">
                    <strong>
23 &nbsp;WORNMWORLD
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_24" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:32609/wormy" data-room="24sg" data-type="false">
                    <strong>
24 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_25" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:30135/wormy" data-room="25sg" data-type="false">
                    <strong>
25 &nbsp;NEW TEST
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_26" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:30161/wormy" data-room="26sg" data-type="false">
                    <strong>
26 &nbsp;NEW TEST
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_27" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:30171/wormy" data-room="27sg" data-type="false">
                    <strong>
27 &nbsp;NEW TEST
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_28" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:30208/wormy" data-room="28sg" data-type="false">
                    <strong>
28 &nbsp;NEW TEST
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_29" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:30327/wormy" data-room="29sg" data-type="false">
                    <strong>
29 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_30" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:30339/wormy" data-room="30sg" data-type="false">
                    <strong>
30 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_31" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:30371/wormy" data-room="31sg" data-type="false">
                    <strong>
31 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_32" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:30702/wormy" data-room="32sg" data-type="false">
                    <strong>
32 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_33" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:30725/wormy" data-room="33sg" data-type="false">
                    <strong>
33 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_34" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:30786/wormy" data-room="34sg" data-type="false">
                    <strong>
34 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_35" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:31084/wormy" data-room="35sg" data-type="false">
                    <strong>
35 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_36" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:31091/wormy" data-room="36sg" data-type="false">
                    <strong>
36 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_37" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:31163/wormy" data-room="37sg" data-type="false">
                    <strong>
37 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_38" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:31230/wormy" data-room="38sg" data-type="false">
                    <strong>
38 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_39" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:32584/wormy" data-room="39sg" data-type="false">
                    <strong>
39 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_40" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:31908/wormy" data-room="40sg" data-type="false">
                    <strong>
40 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_41" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:32405/wormy" data-room="41sg" data-type="false">
                    <strong>
41 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_42" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:32577/wormy" data-room="42sg" data-type="false">
                    <strong>
42 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_43" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:32356/wormy" data-room="43sg" data-type="false">
                    <strong>
43 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_44" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:31908/wormy" data-room="44sg" data-type="false">
                    <strong>
44 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_45" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:32405/wormy" data-room="45sg" data-type="false">
                    <strong>
45 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_46" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://sin-a.wormate.io:31230/wormy" data-room="46sg" data-type="false">
                    <strong>
46 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
        </div>
        <div class="tab-pane" id="tabs7" style="display: none">
            <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://tok-b.wormate.io:31091/wormy" data-room="1jp" data-type="false">
                    <strong>
01 &nbsp;NEW
</strong>
                </div>
                <a href="https://wormworld.io/" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://tok-b.wormate.io:30171/wormy" data-room="2jp" data-type="false">
                    <strong>
02 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io/" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://tok-b.wormate.io:32499/wormy" data-room="3jp" data-type="false">
                    <strong>
03 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io/" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://tok-b.wormate.io:30392/wormy" data-room="4jp" data-type="false">
                    <strong>
04 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io/" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://tok-b.wormate.io:31859/wormy" data-room="5jp" data-type="false">
                    <strong>
05 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io/" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://tok-b.wormate.io:30786/wormy" data-room="6jp" data-type="false">
                    <strong>
06 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io/team/jummee-gaming/" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://tok-b.wormate.io:31770/wormy" data-room="7jp" data-type="false">
                    <strong>
07 &nbsp;WTR SERVER - NEW
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_8" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="&#39;wss://tok-b.wormate.io:32111/wormy" data-room="8jp" data-type="false">
                    <strong>
08 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_9" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://tok-b.wormate.io:32091/wormy" data-room="9jp" data-type="false">
                    <strong>
09 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
        </div>
        <div class="tab-pane" id="tabs8" style="display: none">
            <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://syd-a.wormate.io:31342/wormy" data-room="1au" data-type="false">
                    <strong>
01 &nbsp;SRTIRAQTIK
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_SRTIRAQTIK.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://syd-a.wormate.io:30311/wormy" data-room="2au" data-type="false">
                    <strong>
02 &nbsp;Yaznملك المستودع🇵🇸
</strong>
                </div>
                <a href="https://youtube.com/channel/UChge6sUaT7xwtKmjD9hyjfA" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_YAZN.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://syd-a.wormate.io:30154/wormy" data-room="3au" data-type="false">
                    <strong>
03 &nbsp;WTR SERVER
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://syd-a.wormate.io:31882/wormy" data-room="4au" data-type="false">
                    <strong>
04 &nbsp;NEW
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
        </div>
        <div class="tab-pane" id="tabs9" style="display: none">
            <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dxb-a.wormate.io:32703/wormy" data-room="1ae" data-type="false">
                    <strong>
01 &nbsp;SAEEDI GAMING
</strong>
                </div>
                <a href="https://www.facebook.com/gaming/SaeediGaming86" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_SAEEDI.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dxb-a.wormate.io:31975/wormy" data-room="2ae" data-type="false">
                    <strong>
02 &nbsp;ALI GAMER
</strong>
                </div>
                <a href="https://www.facebook.com/aligamingfriendly125" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_ALIGAMER.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dxb-a.wormate.io:31353/wormy" data-room="3ae" data-type="false">
                    <strong>
03 &nbsp;VEGETA
</strong>
                </div>
                <a href="https://www.facebook.com/AliWarisVegeetaGaming/" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_VEGETA05.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dxb-a.wormate.io:32650/wormy" data-room="4ae" data-type="false">
                    <strong>
04 &nbsp;WTR SERVER- UAE- PAKISTAN- NEW
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dxb-a.wormate.io:32703/wormy" data-room="5ae" data-type="false">
                    <strong>
05 &nbsp;NEW
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:30140/wormy" data-room="6ae" data-type="false">
                    <strong>
06 &nbsp;NEW
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://dxb-a.wormate.io:32703/wormy" data-room="7ae" data-type="false">
                    <strong>
07 &nbsp;QASIM GAMING
</strong>
                </div>
                <a href="https://www.tiktok.com/@qasimgamingfb2.0?_t=8lAYlftxJAx&amp;_r=1" target="_blank">
                    <img src="https://asserts.wormworld.io/rooms/TEAM_QASIM.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_8" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:30573/wormy" data-room="8ae" data-type="false">
                    <strong>
08 &nbsp;WTR SERVER- UAE- PAKISTAN
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_9" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:30339/wormy" data-room="9ae" data-type="false">
                    <strong>
09 &nbsp;WTR SERVER- UAE- PAKISTAN
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_10" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:31091/wormy" data-room="10ae" data-type="false">
                    <strong>
10 &nbsp;WTR SERVER- UAE- PAKISTAN
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_11" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:31392/wormy" data-room="11ae" data-type="false">
                    <strong>
11 &nbsp;WTR SERVER- UAE- PAKISTAN
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_12" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:31290/wormy" data-room="12ae" data-type="false">
                    <strong>
12 &nbsp;WTR SERVER - TIMES
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
            <div id="wwc_room_item_13" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                    data-con="wss://fra-c.wormate.io:31555/wormy" data-room="13ae" data-type="false">
                    <strong>
13 &nbsp;WTR SERVER -TIMES
</strong>
                </div>
                <a href="https://wormworld.io" target="_blank">
                    <img src="https://i.imgur.com/5WbLTZP.png" style="width: 25px; vertical-align: middle" />
                </a>
            </div>
        </div>
    </div>
</div>
?v=20250331233221