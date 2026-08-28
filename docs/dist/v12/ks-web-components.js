//#region webComponents/v12/story/1-applyAttributes.js
var e = (e, t) => {
	if (e.innerHTML = "", t.dataKey || t.name) {
		let n = t.name || t.dataKey;
		e.setAttribute("name", n), e.name = n;
	}
	t.id && (e.setAttribute("id", t.id), e.id = t.id);
};
//#endregion
//#region webComponents/v12/cellRenderers/renderArrayView.js
function t(e, t) {
	let n = document.createElement("button");
	n.textContent = `View (${t.length})`, n.style.cssText = "padding: 0.25rem 0.5rem; font-size: 0.75rem; font-weight: 500; color: #374151; background-color: #f3f4f6; border-radius: 0.375rem; border: 1px solid #d1d5db; cursor: pointer;", n.onmouseover = () => n.style.backgroundColor = "#e5e7eb", n.onmouseout = () => n.style.backgroundColor = "#f3f4f6", e.appendChild(n);
}
var n = {
	default: "w-full box-border border border-gray-300 rounded-md px-3 py-1.5 text-sm outline-none transition-all duration-200 text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
	minimal: "w-full box-border border-b-2 border-gray-300 rounded-none px-2 py-1.5 text-sm outline-none transition-all duration-200 text-gray-700 bg-transparent focus:border-blue-500",
	pill: "w-full box-border border border-gray-300 rounded-full px-4 py-1.5 text-sm outline-none transition-all duration-200 text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
	danger: "w-full box-border border border-red-500 rounded-md px-3 py-1.5 text-sm outline-none transition-all duration-200 text-red-700 bg-red-50 shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500",
	tableTopHeaderStandard: "px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm w-64 transition-all",
	tableTopHeaderCompact: "px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs w-56 transition-all",
	tableTopHeaderExtraCompact: "px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-[11px] w-48 transition-all",
	tableTopHeaderCompactMinimal: "px-4 py-1.5 border border-blue-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm w-64 transition-all shadow-sm text-gray-700",
	verticalStandard: "border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500",
	verticalHorizontalLabel: "border border-blue-400 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm",
	verticalHorizontalLabelAligned: "border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:border-blue-500 text-sm",
	verticalNoLabel: "border-b-2 border-gray-300 px-2 py-3 w-full focus:outline-none focus:border-blue-500 bg-gray-50",
	verticalLargeText: "border-2 border-gray-400 rounded-xl px-5 py-4 w-full text-2xl focus:outline-none focus:border-black font-medium"
}, r = {
	default: "bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition duration-150 shadow-sm cursor-pointer",
	verticalStandard: "bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition duration-150 shadow-sm cursor-pointer",
	verticalHorizontalLabel: "bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-150 cursor-pointer whitespace-nowrap",
	verticalHorizontalLabelAligned: "bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1 rounded transition duration-150 cursor-pointer whitespace-nowrap w-full",
	verticalNoLabel: "bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded shadow cursor-pointer whitespace-nowrap",
	verticalLargeText: "bg-black hover:bg-gray-800 text-white font-bold px-6 py-4 rounded-xl text-xl transition cursor-pointer whitespace-nowrap",
	table: {
		cell: {
			primary: "bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 py-1.5 text-xs rounded transition duration-150 shadow-sm cursor-pointer",
			danger: "bg-red-600 hover:bg-red-700 text-white font-medium px-3 py-1.5 text-xs rounded transition duration-150 shadow-sm cursor-pointer",
			success: "bg-green-600 hover:bg-green-700 text-white font-medium px-3 py-1.5 text-xs rounded transition duration-150 shadow-sm cursor-pointer",
			outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-3 py-1.5 text-xs rounded transition duration-150 shadow-sm cursor-pointer bg-white",
			ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-medium px-3 py-1.5 text-xs rounded transition duration-150 cursor-pointer"
		},
		foot: {
			primary: "bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 text-sm rounded transition duration-150 shadow-sm cursor-pointer",
			outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-4 py-2 text-sm rounded transition duration-150 shadow-sm cursor-pointer bg-white",
			success: "bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 text-sm rounded transition duration-150 shadow-sm cursor-pointer"
		}
	},
	vertical: { standard: {
		primary: "bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition duration-150 shadow-sm cursor-pointer w-full mt-2",
		danger: "bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-md transition duration-150 shadow-sm cursor-pointer w-full mt-2",
		outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-4 py-2 rounded-md transition duration-150 shadow-sm cursor-pointer bg-white w-full mt-2"
	} }
}, i = {
	default: "text-gray-700 text-sm whitespace-nowrap",
	tableCellStandard: "px-4 py-3 whitespace-nowrap text-sm text-gray-700",
	tableCellCompact: "px-3 py-2 whitespace-nowrap text-xs text-gray-700",
	tableCellExtraCompact: "px-2 py-1.5 whitespace-nowrap text-[11px] text-gray-700",
	tableCellLarge: "px-4 py-3 whitespace-nowrap text-xl text-gray-700",
	tableCellExtraLarge: "px-4 py-3 whitespace-nowrap text-3xl text-gray-700",
	tableCellCompactMinimal: "px-4 py-3 whitespace-nowrap text-sm text-gray-700",
	tableCellStandardMinimal: "px-4 py-3.5 whitespace-nowrap text-base text-gray-700",
	tableCellSpaciousMinimal: "px-5 py-4 whitespace-nowrap text-lg text-gray-700",
	table: {
		head: {
			cell: "px-4 py-3 whitespace-nowrap text-sm font-semibold text-gray-800 bg-gray-50 border-b",
			centered: "px-4 py-3 whitespace-nowrap text-sm font-semibold text-gray-800 bg-gray-50 border-b text-center",
			right: "px-4 py-3 whitespace-nowrap text-sm font-semibold text-gray-800 bg-gray-50 border-b text-right"
		},
		foot: {
			cell: "px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-700 bg-gray-50 border-t",
			total: "px-4 py-3 whitespace-nowrap text-base font-bold text-gray-900 bg-gray-100 border-t-2"
		},
		cell: {
			primary: "px-4 py-3 whitespace-nowrap text-sm font-semibold text-blue-600",
			primarySmall: "px-3 py-2 whitespace-nowrap text-xs font-semibold text-blue-600",
			danger: "px-4 py-3 whitespace-nowrap text-sm font-bold text-red-600",
			dangerSmall: "px-3 py-2 whitespace-nowrap text-xs font-bold text-red-600",
			success: "px-4 py-3 whitespace-nowrap text-sm font-medium text-green-600",
			successSmall: "px-3 py-2 whitespace-nowrap text-xs font-medium text-green-600",
			muted: "px-4 py-3 whitespace-nowrap text-sm italic text-gray-400",
			mutedSmall: "px-3 py-2 whitespace-nowrap text-xs italic text-gray-400",
			numeric: "px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono text-right tabular-nums",
			monospace: "px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono",
			serif: "px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-serif",
			light: "px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-light",
			bold: "px-4 py-3 whitespace-nowrap text-sm text-gray-900 font-bold",
			centered: "px-4 py-3 whitespace-nowrap text-sm text-gray-700 text-center",
			right: "px-4 py-3 whitespace-nowrap text-sm text-gray-700 text-right",
			highlight: "px-4 py-3 whitespace-nowrap text-sm text-yellow-900 bg-yellow-50 font-medium"
		}
	},
	vertical: { text: {
		standard: "py-2 text-sm text-gray-700 block",
		primary: "py-2 text-sm font-semibold text-blue-600 block",
		danger: "py-2 text-sm font-bold text-red-600 block",
		success: "py-2 text-sm font-medium text-green-600 block",
		muted: "py-2 text-sm italic text-gray-400 block",
		largeBold: "py-2 text-lg font-extrabold text-gray-900 block"
	} }
}, a = (e, t) => {
	e.className = n[t.theme && n[t.theme] ? t.theme : "default"], t.className && (e.className = `${e.className} ${t.className}`);
};
//#endregion
//#region webComponents/v12/cellRenderers/renderDefault.js
function o(e, t, n = {}) {
	typeof t == "object" && t && (t = JSON.stringify(t)), t ??= "", e.innerHTML = "";
	let r = document.createElement("span");
	r.textContent = t, r.className = i[n.theme && i[n.theme] ? n.theme : "default"], n.textClassName && (r.className = `${r.className} ${n.textClassName}`), e.appendChild(r);
}
//#endregion
//#region webComponents/v12/cellRenderers/renderInputControl/v7/1-createInputElement/typeLayer.js
var s = [
	"text",
	"password",
	"email",
	"number",
	"tel",
	"url",
	"search",
	"date",
	"time",
	"datetime-local",
	"month",
	"week",
	"color",
	"range",
	"checkbox",
	"radio",
	"file",
	"hidden",
	"submit",
	"reset",
	"button",
	"image"
], c = (e, t) => {
	let n = (t.controlType || "text").toLowerCase();
	e.type = s.includes(n) ? n : "text";
}, l = (e, t) => {
	t.placeholder !== void 0 && (e.placeholder = t.placeholder), t.value !== void 0 && (e.value = t.value), t.name !== void 0 && (e.name = t.name), t.id !== void 0 && (e.id = t.id), t.tabIndex !== void 0 && (e.tabIndex = t.tabIndex), t.title !== void 0 && (e.title = t.title), t.autocomplete !== void 0 && (e.autocomplete = t.autocomplete), t.dir !== void 0 && (e.dir = t.dir);
}, u = (e, t) => {
	t.min !== void 0 && (e.min = t.min), t.max !== void 0 && (e.max = t.max), t.step !== void 0 && (e.step = t.step), t.maxLength !== void 0 && (e.maxLength = t.maxLength), t.minLength !== void 0 && (e.minLength = t.minLength), t.pattern !== void 0 && (e.pattern = t.pattern), t.size !== void 0 && (e.size = t.size);
}, d = (e, t) => {
	t.required && (e.required = !0), t.disabled && (e.disabled = !0), t.readOnly && (e.readOnly = !0), t.checked && (e.checked = !0), t.multiple && (e.multiple = !0), t.autofocus && (e.autofocus = !0), t.spellcheck !== void 0 && (e.spellcheck = t.spellcheck), t.formNoValidate && (e.formNoValidate = !0);
}, f = (e) => {
	let t = e, n = document.createElement("input"), r = document.createElement("datalist"), i = "datalist-" + Math.random().toString(36).substr(2, 9);
	return n.setAttribute("list", i), r.id = i, t.listData && Array.isArray(t.listData) && t.listData.forEach((e) => {
		let t = document.createElement("option");
		typeof e == "object" && e ? (t.value = e.value, t.label = e.text, t.textContent = e.text) : t.value = e, r.appendChild(t);
	}), c(n, t), n.__dataListElement = r, n;
}, p = (e) => {
	let t = e, n = document.createElement("select");
	return t.listData && Array.isArray(t.listData) && t.listData.forEach((e) => {
		let t = document.createElement("option");
		typeof e == "object" && e ? (t.value = e.value, t.textContent = e.text) : (t.value = e, t.textContent = e), n.appendChild(t);
	}), n;
}, m = (e) => {
	let t = e, n;
	return t.controlType === "datalist" ? n = f(t) : t.controlType === "select" ? n = p(t) : (n = document.createElement("input"), c(n, t)), l(n, t), u(n, t), d(n, t), n;
}, h = (e) => {
	e.addEventListener("focus", () => {
		e.style.borderColor = "#3b82f6", e.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.3)";
	}), e.addEventListener("blur", () => {
		e.style.borderColor = "#d1d5db", e.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
	});
}, g = (e, t = null) => {
	let n = t || {
		controlType: "text",
		placeholder: "Enter value..."
	}, r = m(n);
	a(r, n), h(r), e.appendChild(r), r.__dataListElement && e.appendChild(r.__dataListElement);
}, _ = (e, n, i) => {
	let a = !1;
	if (i?.showInput && (g(e, i), a = !0), i?.showButton) {
		let t = document.createElement("button");
		t.textContent = i.buttonText || "Submit", t.className = r[i.theme && r[i.theme] ? i.theme : "default"], i.buttonClassName && (t.className = `${t.className} ${i.buttonClassName}`), e.appendChild(t), a = !0;
	}
	if (!a) {
		if (Array.isArray(n)) {
			t(e, n);
			return;
		}
		o(e, n, i);
	}
}, v = class extends HTMLElement {
	static get PREDEFINED_CLASSES() {
		return n;
	}
	static get PREDEFINED_BUTTON_CLASSES() {
		return r;
	}
	static get PREDEFINED_TEXT_CLASSES() {
		return i;
	}
	constructor() {
		super(), this._inputs = {};
	}
	set inputs(e) {
		this._inputs = e, this.render();
	}
	get inputs() {
		return this._inputs;
	}
	render() {
		let t = this._inputs.cellValue, n = this._inputs.options || {};
		e(this, n), _(this, t, n);
	}
	get value() {
		let e = this.querySelector("input, select, textarea");
		if (e) return e.type === "checkbox" ? e.checked : e.value;
	}
	set value(e) {
		let t = this.querySelector("input, select, textarea");
		t && (t.type === "checkbox" ? t.checked = e : t.value = e);
	}
};
customElements.get("ks-table-cell-content-common") || customElements.define("ks-table-cell-content-common", v), window.ks = window.ks || {}, window.ks.webComponents = window.ks.webComponents || {}, Object.assign(v, window.ks.webComponents.KsTableCellContent || {}), window.ks.webComponents.KsTableCellContent = v, window.ks.webComponents.KsTableCellContent.version = "v11";
//#endregion
export { v as KsTableCellContent };
