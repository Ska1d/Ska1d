//const

const tabsfield = document.getElementById("tabs");

const button_c = document.getElementById("c");
const button_c_s = document.getElementById("c#");
const button_d = document.getElementById("d");
const button_d_s = document.getElementById("d#");
const button_e = document.getElementById("e");
const button_f = document.getElementById("f");
const button_f_s = document.getElementById("f#");
const button_g = document.getElementById("g");
const button_g_s = document.getElementById("g#");
const button_a = document.getElementById("a");
const button_a_s = document.getElementById("a#");
const button_b = document.getElementById("b");

const button_C = document.getElementById("C");
const button_C_s = document.getElementById("C#");
const button_D = document.getElementById("D");
const button_D_s = document.getElementById("D#");
const button_E = document.getElementById("E");
const button_F = document.getElementById("F");
const button_F_s = document.getElementById("F#");
const button_G = document.getElementById("G");
const button_G_s = document.getElementById("G#");
const button_A = document.getElementById("A");
const button_A_s = document.getElementById("A#");
const button_B = document.getElementById("B");

const button_space = document.getElementById("space");
const button_backspace = document.getElementById("backspace");

const low_d = ["●","●", "●", " ", "●", "●", "●", "❘", " "];
const low_d_s = ["●","●", "●", " ", "●", "●", "▾", "❘", " "];
const low_e = ["●","●", "●", " ", "●", "●", "○", "❘", " "];
const low_f = ["●","●", "●", " ", "●", "▾", "○", "❘", " "];
const low_f_s = ["●","●", "●", " ", "●", "○", "○", "❘", " "];
const low_g = ["●","●", "●", " ", "○", "○", "○", "❘", " "];
const low_g_s = ["●","●", "▾", " ", "○", "○", "○", "❘", " "];
const low_a = ["●","●", "○", " ", "○", "○", "○", "❘", " "];
const low_a_s = ["●","○", "●", " ", "●", "●", "●", "❘", " "];
const low_b = ["●","○", "○", " ", "○", "○", "○", "❘", " "];
const low_c = ["○","●", "●", " ", "○", "○", "○", "❘", " "];
const low_c_s = ["○","○", "○", " ", "○", "○", "○", "❘", " "];

const hight_d = ["○","●", "●", " ", "●", "●", "●", "✚", " "];
const hight_d_s = ["●","●", "●", " ", "●", "●", "▾", "✚", " "];
const hight_e = ["●","●", "●", " ", "●", "●", "○", "✚", " "];
const hight_f = ["●","●", "●", " ", "●", "▾", "○", "✚", " "];
const hight_f_s = ["●","●", "●", " ", "●", "○", "○", "✚", " "];
const hight_g = ["●","●", "●", " ", "○", "○", "○", "✚", " "];
const hight_g_s = ["●","●", "▾", " ", "○", "○", "○", "✚", " "];
const hight_a = ["●","●", "○", " ", "○", "○", "○", "✚", " "];
const hight_a_s = ["●","○", "●", " ", "○", "○", "○", "✚", " "];
const hight_b = ["●","○", "○", " ", "○", "○", "○", "✚", " "];
const hight_c = ["○","●", "○", " ", "●", "●", "●", "✚", " "];
const hight_c_s = ["○","○", "○", " ", "●", "●", "●", "✚", " "];

const rest = [" ", " ", " ", " ", " ", " ", " ", " "];

//let 

let column = 0;
let note = null;
let tabs = [];
let bufferT = [];
let line = 0;
let flag = 0;
let width = null;
let symbols = null;
//functions

function distribution()
{
	bufferT = [];

	if (column > symbols - 1)
	{
		line += 9;
		column = 0;
	}

	for (let i = 0; i <9; i++)
	{
		let j = i + line;
		if (tabs[j] == null)
		{
			tabs[j] = [];
		}
		tabs[j][column] = note[i];
	}
	column += 1;

	for (let i = 0; i < line + 9; i++)
	{
		bufferT.push(tabs[i].join(" "));
	}

	tabsfield.textContent = bufferT.join("\n");
	flag = 1;
}

function clear()
{
	bufferT = [];
	if (column != 0)
	{
		column --;
		for (let i = 0; i <9; i++)
		{
			let j = i + line;
			tabs[j][column] = null
		}
		if (column == 0 && line != 0)
		{
			line = line - 9;
			column = symbols;
		}

	}
	else if (line != 0)
	{
		for (let i = 0; i <8; i++)
		{
			let j = i + line;
			tabs[j][column] = null
		}
	}

	for (let i = 0; i < line + 8; i++)
	{
		bufferT.push(tabs[i].join(" "));
	}

	tabsfield.textContent = bufferT.join("\n");
	console.log(tabs);
}

function fieldWidth()
{
	var observer = new ResizeObserver(function(entries)
	{
	    width = entries[0].contentRect.width;
	    console.log(width);
		if (flag == 0)
		{
			symbols = width / 20.9;
		}	
	});
	
	observer.observe(tabsfield);
}

function buttons()
{
	//octave 1
	button_c.addEventListener("click", function()
	{
		note = low_c;
		distribution();
	});

	button_c_s.addEventListener("click", function()
	{
		note = low_c_s;
		distribution();
	});

	button_d.addEventListener("click", function()
	{
		note = low_d;
		distribution();
	});

	button_d_s.addEventListener("click", function()
	{
		note = low_d_s;
		distribution();
	});

	button_e.addEventListener("click", function()
	{
		note = low_e;
		distribution();
	});

	button_f.addEventListener("click", function()
	{
		note = low_f;
		distribution();
	});

	button_f_s.addEventListener("click", function()
	{
		note = low_f_s;
		distribution();
	});

	button_g.addEventListener("click", function()
	{
		note = low_g;
		distribution();
	});

	button_g_s.addEventListener("click", function()
	{
		note = low_g_s;
		distribution();
	});

	button_a.addEventListener("click", function()
	{
		note = low_a;
		distribution();
	});

	button_a_s.addEventListener("click", function()
	{
		note = low_a_s;
		distribution();
	});

	button_b.addEventListener("click", function()
	{
		note = low_b;
		distribution();
	});

	//octave 2 
		button_C.addEventListener("click", function()
	{
		note = hight_c;
		distribution();
	});

	button_C_s.addEventListener("click", function()
	{
		note = hight_c_s;
		distribution();
	});

	button_D.addEventListener("click", function()
	{
		note = hight_d;
		distribution();
	});

	button_D_s.addEventListener("click", function()
	{
		note = hight_d_s;
		distribution();
	});

	button_E.addEventListener("click", function()
	{
		note = hight_e;
		distribution();
	});

	button_F.addEventListener("click", function()
	{
		note = hight_f;
		distribution();
	});

	button_F_s.addEventListener("click", function()
	{
		note = hight_f_s;
		distribution();
	});

	button_G.addEventListener("click", function()
	{
		note = hight_g;
		distribution();
	});

	button_G_s.addEventListener("click", function()
	{
		note = hight_g_s;
		distribution();
	});

	button_A.addEventListener("click", function()
	{
		note = hight_a;
		distribution();
	});

	button_A_s.addEventListener("click", function()
	{
		note = hight_a_s;
		distribution();
	});

	button_B.addEventListener("click", function()
	{
		note = hight_b;
		distribution();
	});

	//additionally

	button_space.addEventListener("click", function()
	{
		note = rest;
		distribution();
	})

	button_backspace.addEventListener("click", function()
	{
		flag = 1;
		clear();
	})
}

//main

tabsfield.textContent = null;
buttons();
fieldWidth();
