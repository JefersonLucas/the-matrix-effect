/*!
 * Jeferson Luckas - the matrix effect
 * 
 * Copyright (c) 2020 Jeferson Luckas
 * Released under the MIT license
 * https://github.com/JefersonLucas/the-matrix-effect/blob/master/LICENSE
 *
 * Date: 2020-21-06
 */

window.onload = function() {

    var canvas = document.getElementById("canvas");

    effectMatrix(canvas);

    function effectMatrix(neo) {

        var screen = window.screen;
        var width = (neo.width = screen.width);
        var height = (neo.height = screen.height);
        var letters = Array(256).join(1).split("");

        var designMatrix = function() {

            neo.getContext("2d").fillStyle = "rgba(0,0,0,.05)";
            neo.getContext("2d").fillRect(0, 0, width, height);

            neo.getContext("2d").fillStyle = "#0F0";

            letters.map(function (position_y, index) {

                var text = String.fromCharCode(48 + Math.random() * 33);
                var position_x = index * 10;
                neo.getContext("2d").fillText(text, position_x, position_y);

                letters[index] = position_y > 758 + Math.random() * 1e4 ? 0 : position_y + 10;
            });        
        }
        setInterval(designMatrix, 60);
    }
}