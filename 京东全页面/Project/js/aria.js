! function() {
	var n = {
			1019: function(e, t, n) {
				var r = n(1439),
					o = n(954),
					a = n(2713),
					i = n(8962),
					s = n(9564),
					l = n(57),
					c = n(2264),
					u = n(755);
				n(5602);
				var d = n(9228);
				n(5045);
				var f = n(3385),
					g = {
						status: function() {
							return i.status
						}
					};
				if (g.support = u.check(), g.browserSupport = {
						error: function() {
							r(".cnwza").addClass("ariaHide"), r("#cnwza").addClass("ariaHide"), r("#cniil_wza")
								.addClass("ariaHide"), alert("您浏览器版本太低，请升级您的浏览器")
						},
						success: function() {}
					}, window.globalActiveElem = document.body, window.globalActiveDialogElem = null, o.checkJs(), g
					.end = function() {
						i.status = !1, i.tellerMode = !1, a.end(), f.end(), h()
					}, g.startFrame = function(e) {
						a.start(e)
					}, g.start = function(e) {
						g.support ? o.init(e).then(function() {
								try {
									a.start(), f.start(), i.status = !0, h(), g.browserSupport && g
										.browserSupport.error && "function" == typeof g.browserSupport
										.success && g.browserSupport.success()
								} catch (e) {}
							}) : g.browserSupport && g.browserSupport.error && "function" == typeof g.browserSupport
							.error && g.browserSupport.error()
					}, l.registerEvent(c.globalStart, g.start, 0), l.registerEvent(c.globalEnd, g.end, 0), o
					.settings.status || d.queryString.val("aria")) try {
					setTimeout(function() {
						g.start()
					}, 1500)
				} catch (e) {}

				function h() {
					o.settings.status ? (r(".cnwza").addClass("ariaHide"), r("#cnwza").addClass("ariaHide"), r(
						"#cniil_wza").addClass("ariaHide")) : (r(".cnwza").removeClass("ariaHide"), r("#cnwza")
						.removeClass("ariaHide"), r("#cniil_wza").removeClass("ariaHide"))
				}
				r(document.body).on("click", ".cnwza,#cnwza,#cniil_wza", g.start), s.start(g.start, g.end), window
					.aria = g, e.exports = g
			},
			1266: function(e, t, n) {
				function o(e) {
					return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol
							.prototype ? "symbol" : typeof e
					})(e)
				}
				var r = n(8057),
					a = n(9228),
					i = n(8962);
				e.exports = {
					checkDialogShow: function() {
						var n, e = new r(a.arrToSizzle(a.HtmlElemRoles.dialog));
						return a.each(e, function(e, t) {
							t = new r(t);
							if (!t.isHidden()) return n = t
						}), n
					},
					eventKeyCode: function(e) {
						return e.keyCode || e.which || e.charCode
					},
					checkKeyCode: function(e, t) {
						if (!e || !t) return !1;
						if (void 0 === (t = !t.keyCode ? {
								keyCode: t
							} : t).status && (t.status = !0), t.status && !i.status) return !1;
						var n = e.keyCode || e.which || e.charCode;
						if (n && !("number" == typeof t.keyCode && t.keyCode != n || "object" == o(t
								.keyCode) && [].indexOf.call(t.keyCode, n) < 0)) {
							var r = e.ctrlKey,
								n = e.shfitKey,
								e = e.altKey;
							return !(t.ctrlKey && !r) && (!(t.shfitKey && !n) && !(t.altKey && !e))
						}
					},
					keyCodeSettings: {
						wakeup: {
							shiftKey: !1,
							ctrlKey: !0,
							altKey: !1,
							status: !1,
							keyCode: 192
						},
						wakupConfig: {
							shiftKey: !1,
							ctrlKey: !0,
							altKey: !0,
							status: !0,
							keyCode: 76
						},
						dialogClose: {
							shiftKey: !1,
							ctrlKey: !1,
							altKey: !1,
							keyCode: 27
						},
						changeRegion: {
							next: {
								shiftKey: !1,
								ctrlKey: !0,
								altKey: !0,
								status: !0,
								keyCode: [34, 40]
							},
							pre: {
								shiftKey: !1,
								ctrlKey: !0,
								altKey: !0,
								status: !0,
								keyCode: [33, 38]
							}
						},
						opVoice: {
							shiftKey: !1,
							ctrlKey: !0,
							altKey: !0,
							status: !0,
							keyCode: 86
						},
						vocierate: {
							shiftKey: !1,
							ctrlKey: !0,
							altKey: !0,
							status: !0,
							keyCode: 75
						},
						mouseb: {
							shiftKey: !1,
							ctrlKey: !0,
							altKey: !0,
							keyCode: 77
						},
						mouseten: {
							shiftKey: !1,
							ctrlKey: !0,
							altKey: !0,
							keyCode: 78
						},
						reset: {
							shiftKey: !1,
							ctrlKey: !0,
							altKey: !0,
							keyCode: 67
						},
						readsrc: {
							shiftKey: !1,
							ctrlKey: !0,
							altKey: !0,
							keyCode: 82
						},
						bigsrc: {
							shiftKey: !1,
							ctrlKey: !0,
							altKey: !0,
							keyCode: 66
						},
						readtype: {
							shiftKey: !1,
							ctrlKey: !0,
							altKey: !0,
							keyCode: 70
						},
						exitservice: {
							shiftKey: !1,
							ctrlKey: !0,
							altKey: !0,
							keyCode: 69
						},
						changeTheme: {
							shiftKey: !1,
							ctrlKey: !0,
							altKey: !0,
							keyCode: 84
						},
						fontTob: {
							shiftKey: !1,
							ctrlKey: !0,
							altKey: !0,
							keyCode: 187
						},
						fontTos: {
							shiftKey: !1,
							ctrlKey: !0,
							altKey: !0,
							keyCode: 189
						},
						help: {
							shiftKey: !1,
							ctrlKey: !0,
							altKey: !0,
							keyCode: 191
						}
					}
				}
			},
			755: function(e, t, n) {
				var r = n(9228);
				e.exports = {
					check: function() {
						var e = r.browser.getBrowserInfo();
						switch (e.browser) {
							case "IE":
								return 9 < e.version;
							case "firefox":
								return 50 <= e.version;
							case "chrome":
								return 33 <= e.version;
							case "safari":
								return 9 <= e.version
						}
						return !0
					}
				}
			},
			7316: function(e, t, n) {
				var r = n(9724),
					o = "aria/runtime/settings",
					a = "aria/data/settings",
					i = "aria/runtime",
					n = "aria/data",
					s = {
						road: "aria/road",
						root: "aria",
						runtime: {
							root: i,
							serviceUrl: i + "/serviceUrl",
							security: i + "/security",
							appid: i + "/appid",
							status: i + "/status",
							settings: {
								root: o,
								highlight: {
									root: o + "/highlight",
									enable: o + "/highlight/enable",
									rate: o + "/highlight/rate",
									mode: o + "/highlight/mode"
								},
								voice: {
									root: o + "/voice",
									enable: o + "/voice/enable",
									maxRate: o + "/voice/maxRate",
									minRate: o + "/voice/minRate",
									rate: o + "/voice/rate"
								},
								curregion: {
									id: o + "/curregion/id"
								},
								golabSkipScale: o + "/golabSkipScale",
								golabSkipAll: o + "/golabSkipAll",
								golabSkipTheme: o + "/golabSkipTheme",
								golabFocus: o + "/golabFocus",
								golabRegion1: o + "/golabRegion1",
								golabRegion2: o + "/golabRegion2",
								golabRegion3: o + "/golabRegion3",
								golabRegion4: o + "/golabRegion4",
								golabReplaceBg: o + "/golabReplaceBg",
								tellerMode: o + "/tellerMode",
								defaultTheme: o + "/defaultTheme",
								defaultLanguage: o + "/defaultLanguage",
								shortCutIcon: o + "/shortCutIcon",
								scale: o + "/scale",
								css: o + "/css",
								closeShortIcon: o + "/closeShortIcon",
								bodyfont: o + "/bodyfont",
								ariaPointerRead: o + "/ariaPointerRead",
								reticle: o + "/reticle",
								bigpoint: o + "/bigpoint",
								spacing: o + "/spacing",
								padding: o + "/padding",
								leftfixed: o + "/leftfixed",
								topfixed: o + "/fixed",
								readtype: o + "/readtype",
								readsrc: o + "/readsrc",
								maxZoom: o + "/maxZoom",
								minZoom: o + "/minZoom",
								mousemode: o + "/mousemode",
								mouseten: o + "/mouseten",
								py: o + "/py",
								big5: o + "/big5",
								bigsrc: o + "/bigsrc",
								canRead: o + "/canRead"
							}
						},
						data: {
							root: n,
							version: "aria/version",
							languages: n + "/languages",
							themes: n + "/theme",
							golbalElems: n + "/golbalElems",
							roles: n + "/roles",
							conf: {
								root: n + "/conf",
								region: n + "/conf/region"
							},
							settings: {
								root: a,
								enable: o + "/enable",
								highlight: {
									root: a + "/highlight",
									enable: a + "/highlight/enable",
									rate: a + "/highlight/rate",
									mode: a + "/highlight/mode"
								},
								voice: {
									root: a + "/voice",
									enable: a + "/voice/enable",
									rate: a + "/voice/rate"
								},
								tellerMode: a + "/tellerMode",
								defaultTheme: a + "/defaultTheme",
								defaultLanguage: a + "/defaultLanguage",
								shortCutIcon: a + "/shortCutIcon",
								scale: a + "/scale",
								spacing: a + "/spacing",
								padding: a + "/padding"
							}
						}
					},
					a = "/api/services/Accessibility",
					l = {
						data: {
							config: a + "/Configuration/GetAll",
							curconf: a + "/Configuration/GetConf",
							security: a + "/Security/Get",
							ttsurl: a + "/TTS/Create"
						},
						get serviceUrl() {
							var e = location.protocol + "://" + location.host + ":" + location.port,
								t = r.get(s.runtime.serviceUrl);
							return null != t ? t : e
						},
						set serviceUrl(e) {
							r.set(s.runtime.serviceUrl, e)
						},
						get config() {
							return this.serviceUrl + l.data.config
						},
						get curconf() {
							return this.serviceUrl + l.data.curconf
						},
						get security() {
							return this.serviceUrl + l.data.security
						},
						get ttsurl() {
							return l.data.ttsurl.indexOf("//") < 0 ? this.serviceUrl + l.data.ttsurl : l.data
								.ttsurl
						}
					};
				e.exports = {
					keys: s,
					api: l,
					elem: {
						shortCutIcon: "aria-shortCutIcon"
					},
					copyright: {
						name: "aria",
						version: "3.0.1",
						description: "无障碍功能脚本",
						author: "Locas"
					}
				}
			},
			954: function(e, t, n) {
				function a(e) {
					return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol
							.prototype ? "symbol" : typeof e
					})(e)
				}
				var i = n(7316),
					s = n(9632),
					l = n(8962),
					c = n(9228);
				e.exports = {
					init: function(o) {
						return new Promise(function(t, e) {
							if (l.conf && 30 < l.conf.lenght && (l.conf = []), l.curpageConf)
							return t(l.conf);
							var r = l.conf || [];
							r && "object" != a(r) && (r = JSON.parse(r)), s.getService().then(
								function() {
									if (o = o || {}, !l.appid && !o.appid)
									throw "请先设置Appid字段，请登录后台查看";
									var n;
									o.serviceUrl && (l.serviceUrl = o.serviceUrl), o.appid && (l
											.appid = o.appid), o.appid || (o.appid = l.appid), o
										.beforeInit && "function" == typeof o.beforeInit && o
										.beforeInit(), n = o, new Promise(function(t, e) {
											s.get(i.api.config, {
												appid: n.appid
											}).then(function(e) {
												l.data = e, l.init(e.settings), t(e)
											})
										}).then(function() {
											s.get(i.api.curconf).then(function(e) {
												null != e ? r.push({
													name: window.location
														.href,
													value: e
												}) : r.push({
													name: window.location
														.href,
													value: {}
												}), l.conf = r, t(e)
											})
										}, function(e) {})
								})
						})
					},
					settings: l,
					checkJs: function() {
						var o = !1;
						return c.each(document.scripts, function(e, t) {
							var n = t.src.indexOf("/aria.");
							if (null !== t.src && -1 < n) {
								var r = c.queryString.val("appid", t.src);
								return r && (l.appid = r), o = !0, l.road = t.src.substr(0, n + 1),
									!1
							}
						}), o
					}
				}
			},
			9632: function(e, t, n) {
				function o(e) {
					return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol
							.prototype ? "symbol" : typeof e
					})(e)
				}
				var i = n(9438),
					s = n(9724),
					l = n(9228),
					c = n(7316);

				function u() {
					var e = s.get(c.keys.runtime.security);
					return void 0 === e || null == e || (!e || !e.token || !e.timestamp || e.timestamp < (new Date)
						.getTime() - 864e5)
				}

				function a() {
					return new Promise(function(t, e) {
						var n = s.get(c.keys.runtime.serviceUrl),
							r = s.get(c.keys.road);
						n ? t() : i.get(r + "config.json").then(function(e) {
							(e = "object" != o(e) ? JSON.parse(e) : e).url || (e.url = location
								.protocol + "//" + location.host), s.set(c.keys.runtime
								.serviceUrl, e.url), t()
						})
					})
				}

				function r(r) {
					return new Promise(function(n, e) {
						r = r || {}, a().then(function() {
							new Promise(function(t, n) {
								var r, o, e, a = s.get(c.keys.runtime.security);
								u() ? (r = (new Date).getTime(), o = s.get(c.keys.runtime
									.appid), e = {
									data: {
										timestamp: r,
										appid: o
									},
									headers: [],
									url: c.api.security,
									error: function() {}
								}, i.ajax(e).then(function(e) {
									void 0 !== e ? (e = (e = l.isIE() ? JSON
										.parse(e) : e).result, s.set(c
										.keys.runtime.security, {
											timestamp: r,
											appid: o,
											token: e.token
										}), t({
										timestamp: r,
										token: e.token,
										appid: o
									})) : n("未传出参数")
								})) : t(a)
							}).then(function(e) {
								e.referer = encodeURIComponent(document.location.href), r
									.data && "function" == typeof r.data && (r.success = r
										.data, r.data = {}), r.data = Object.assign({}, r
										.data, e), r.headers || (r.headers = []), r
									.headers && "object" === o(r.headers) && !r.headers[
										"Content-Type"] && r.headers.push({
										"Content-Type": "application/json"
									}), r.error || (r.error = function(e) {});
								var t = r.success;
								r.success = null, i.ajax(r).then(function(e) {
									l.isIE() && (e = JSON.parse(e)), t &&
										"function" == typeof t && t(e.result), n(e
											.result)
								}, function(e, t) {})
							})
						})
					})
				}
				e.exports = {
					ajax: r,
					get: function(e, t, n) {
						return r({
							url: e,
							type: "GET",
							data: t,
							success: n
						})
					},
					post: function(e, t, n) {
						return r({
							url: e,
							type: "POST",
							data: t,
							success: n
						})
					},
					checkUpdateToken: u,
					getService: a
				}
			},
			8962: function(e, t, n) {
				function r(e) {
					return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol
							.prototype ? "symbol" : typeof e
					})(e)
				}
				var o, a = n(7316),
					i = n(2392),
					s = n(9724),
					l = n(9228),
					c = a.keys.runtime,
					u = a.keys.data,
					d = {
						hostEnable: {
							get highlight() {
								if (d.Theme) return d.Theme.highlight.enable
							},
							get mouseover() {
								if (d.Theme) return d.Theme.mouseover.enable
							},
							get focus() {
								if (d.Theme) return d.Theme.focus.enable
							},
							get region() {
								if (d.Theme) return d.Theme.region.enable
							},
							get voice() {
								return s.get(u.settings.voice.enable)
							},
							get shortCutIcon() {
								return s.get(u.settings.shortCutIcon)
							},
							get fontScal() {
								return 0 <= s.get(u.settings.scale)
							},
							get enable() {
								return s.get(u.settings.enable)
							}
						},
						init: function(e) {
							var t = s.get(c.settings.root),
								t = i({}, e, t);
							s.set(c.settings.root, t)
						},
						reset: function() {
							var e = s.get(a.keys.data.settings.root);
							s.set(c.settings.root, e)
						},
						className: {
							region: "ariaregion",
							highlight: "ariahighlight",
							focus: "ariafocus"
						},
						get golabSkipScale() {
							return s.get(c.settings.golabSkipScale)
						},
						get golabReplaceBg() {
							return s.get(c.settings.golabReplaceBg)
						},
						get golabSkipAll() {
							return s.get(c.settings.golabSkipAll)
						},
						get golabFocus() {
							return s.get(c.settings.golabFocus)
						},
						get golabRegion1() {
							return s.get(c.settings.golabRegion1)
						},
						get golabRegion2() {
							return s.get(c.settings.golabRegion2)
						},
						get golabRegion3() {
							return s.get(c.settings.golabRegion3)
						},
						get golabRegion4() {
							return s.get(c.settings.golabRegion4)
						},
						get golabSkipTheme() {
							return s.get(c.settings.golabSkipTheme)
						},
						get topfixed() {
							return s.get(c.settings.topfixed)
						},
						set topfixed(e) {
							s.set(c.settings.topfixed, e)
						},
						get minZoom() {
							var e = s.get(c.settings.minZoom);
							return e = 0 == e ? .5 : e
						},
						get maxZoom() {
							var e = s.get(c.settings.maxZoom);
							return e = 0 == e ? .5 : e
						},
						get py() {
							return s.get(c.settings.py)
						},
						set py(e) {
							s.set(c.settings.py, e)
						},
						get big5() {
							return s.get(c.settings.big5)
						},
						set big5(e) {
							s.set(c.settings.big5, e)
						},
						get canRead() {
							return s.get(c.settings.canRead)
						},
						set canRead(e) {
							s.set(c.settings.canRead, e)
						},
						get readsrc() {
							return s.get(c.settings.readsrc)
						},
						set readsrc(e) {
							s.set(c.settings.readsrc, e)
						},
						get readtype() {
							return s.get(c.settings.readtype)
						},
						set readtype(e) {
							s.set(c.settings.readtype, e)
						},
						get leftfixed() {
							return s.get(c.settings.leftfixed)
						},
						set leftfixed(e) {
							s.set(c.settings.leftfixed, e)
						},
						get bigpoint() {
							return s.get(c.settings.bigpoint)
						},
						set bigpoint(e) {
							s.set(c.settings.bigpoint, e)
						},
						get reticle() {
							return s.get(c.settings.reticle)
						},
						set reticle(e) {
							s.set(c.settings.reticle, e)
						},
						set conf(e) {
							"object" != r(e) && (e = JSON.parse(e)), s.set(u.conf.root, e)
						},
						get golbalElems() {
							return s.get(u.golbalElems)
						},
						get conf() {
							return s.get(u.conf.root)
						},
						get curpageConf() {
							var t = top.location.href,
								e = s.get(u.conf.root);
							if (e) return 0 < (e = (e = "object" != r(e) ? JSON.parse(e) : e).filter(function(
							e) {
								return e.name == t
							})).length ? e[0] : void 0
						},
						confQuerySelector: function(e) {
							if (e && (n = e.key)) {
								switch (e.type) {
									case 1:
										for (var t = n.split(" "), n = "#" === t[0].substr(0, 1) ? t[0] : "#" +
												t[0], r = 1; r < t.length; r++) 0 < (a = t[r]).length && (n +=
											":is(", n += "#" === a.substr(0, 1) ? a : "#" + a, n += ")");
										return n;
									case 2:
										var o = n.split(" ");
										n = "." === o[0].substr(0, 1) ? o[0] : "." + o[0];
										for (var a, r = 1; r < o.length; r++) 0 < (a = o[r]).length && (n +=
											":is(", n += "." === a.substr(0, 1) ? a : "." + a, n += ")");
										return n
								}
								return n
							}
						},
						get shortCutIcon() {
							return s.get(c.settings.shortCutIcon)
						},
						set shortCutIcon(e) {
							s.set(c.settings.shortCutIcon, e)
						},
						get scale() {
							return s.get(c.settings.scale)
						},
						set scale(e) {
							s.set(c.settings.scale, e)
						},
						get road() {
							return s.get(a.keys.road)
						},
						set road(e) {
							s.set(a.keys.road, e)
						},
						get ariaPointerRead() {
							return s.get(c.settings.ariaPointerRead)
						},
						set ariaPointerRead(e) {
							s.set(c.settings.ariaPointerRead, e)
						},
						get bodyfont() {
							var e = s.get(c.settings.bodyfont);
							return e || (e = parseInt(l.getStyle(document.body)["font-size"], 10), s.set(c
								.settings.bodyfont, e), e)
						},
						get inFrame() {
							return window.self !== top
						},
						get data() {
							return s.get(a.keys.data.root)
						},
						set data(e) {
							s.set(a.keys.data.root, e)
						},
						get appid() {
							return s.get(c.appid)
						},
						set appid(e) {
							s.set(c.appid, e)
						},
						get serviceUrl() {
							return s.get(c.serviceUrl)
						},
						set serviceUrl(e) {
							s.set(c.serviceUrl, e)
						},
						get root() {
							return s.get(c.root)
						},
						get settingsRoot() {
							return s.get(c.settings.root)
						},
						voice: {
							set enable(e) {
								s.set(a.keys.runtime.settings.voice.enable, e)
							},
							get enable() {
								return s.get(a.keys.runtime.settings.voice.enable)
							},
							get maxRate() {
								var e = s.get(a.keys.runtime.settings.voice.maxRate);
								return e = e < 2 ? 3 : e
							},
							get minRate() {
								var e = s.get(a.keys.runtime.settings.voice.minRate);
								return e = e <= .8 ? .8 : e
							},
							get rate() {
								return s.get(a.keys.runtime.settings.voice.rate)
							},
							set rate(e) {
								s.set(a.keys.runtime.settings.voice.rate, e)
							}
						},
						highlight: {
							set enable(e) {
								s.set(c.settings.highlight.enable, e)
							},
							get enable() {
								return s.get(c.settings.highlight.enable)
							},
							get rate() {
								return s.get(c.settings.highlight.rate)
							},
							set rate(e) {
								s.set(c.settings.highlight.rate, e)
							},
							get mode() {
								return s.get(c.settings.highlight.mode)
							},
							set mode(e) {
								s.set(c.settings.highlight.mode, e)
							}
						},
						get padding() {
							return s.get(c.settings.padding)
						},
						set padding(e) {
							s.set(c.settings.padding, e)
						},
						get spacing() {
							return s.get(c.settings.spacing)
						},
						set spacing(e) {
							s.set(c.settings.spacing, e)
						},
						get tellerMode() {
							return s.get(c.settings.tellerMode)
						},
						set tellerMode(e) {
							s.set(c.settings.tellerMode, e)
						},
						get status() {
							return s.get(c.status)
						},
						set status(e) {
							s.set(c.status, e)
						},
						get mousemode() {
							return s.get(c.settings.mousemode)
						},
						set mousemode(e) {
							s.set(c.settings.mousemode, e)
						},
						get mouseten() {
							return s.get(c.settings.mouseten)
						},
						set mouseten(e) {
							s.set(c.settings.mouseten, e)
						},
						get bigsrc() {
							return s.get(c.settings.bigsrc)
						},
						set bigsrc(e) {
							s.set(c.settings.bigsrc, e)
						},
						get defaultTheme() {
							return s.get(c.settings.defaultTheme)
						},
						set defaultTheme(t) {
							var e;
							s.set(c.settings.defaultTheme, t), t ? 0 < (e = (e = "object" != r(e = s.get(a.keys
								.data.themes)) ? JSON.parse(e) : e).filter(function(e) {
								return e.name == t
							})).length && (o = e[0].value) : o = null
						},
						get Theme() {
							if (o) return o;
							var t = s.get(c.settings.defaultTheme);
							if (t) {
								var e = s.get(a.keys.data.themes),
									e = (e = "object" != r(e) ? JSON.parse(e) : e).filter(function(e) {
										return e.name == t
									});
								return o = 0 < e.length ? e[0].value : o
							}
							o = null
						},
						get Themes() {
							var e = s.get(a.keys.data.themes);
							return e = "object" != r(e) ? JSON.parse(e) : e
						},
						get defaultLanguage() {
							return s.get(c.settings.defaultLanguage)
						},
						set defaultLanguage(e) {
							s.set(c.settings.defaultLanguage, e)
						},
						get Language() {
							var e = this.defaultLanguage;
							if (e) return s.get(a.keys.data.languages)[e]
						},
						get Languages() {
							return s.get(a.keys.data.languages)
						},
						getText: function(e) {
							var t = this.Language;
							if (t) return t[e]
						},
						set closeShortIcon(e) {
							s.set(c.settings.closeShortIcon, e)
						},
						get closeShortIcon() {
							return s.get(c.settings.closeShortIcon)
						}
					};
				e.exports = d
			},
			2264: function(e) {
				e.exports = {
					globalListen: "globalListen",
					voicePlay: "voicePlay",
					click: "click",
					focusIn: "focusIn",
					blur: "blur",
					globalStart: "globalStart",
					globalEnd: "globalEnd",
					startService: "startService",
					endService: "endService",
					SizzleKeyDown: "SizzleKeyDown",
					TouchWakeup: "TouchWakeup"
				}
			},
			57: function(e, t, n) {
				function r(e) {
					return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol
							.prototype ? "symbol" : typeof e
					})(e)
				}
				var a = n(9228),
					n = n(2264),
					i = [];
				e.exports = {
					registerEvent: function(e, t, n) {
						"object" == r(e) && i.push(e), i.push({
							name: e,
							event: t,
							priority: n
						})
					},
					execEvent: function(t, n) {
						if (t) {
							for (var r = !1, o = 0; o < 10; o++) {
								var e = i.filter(function(e) {
									return e.name == t && e.priority == o
								});
								a.each(e, function(e, t) {
									t && t.event && "function" == typeof t.event && (r = "array" ==
										a.type(n) ? r || t.event.apply(this, n) : r || t.event
										.call(this, n))
								})
							}
							return r
						}
					},
					eventNames: n
				}
			},
			9985: function(e, t, n) {
				var c, r, u, d = n(8057),
					f = n(1266),
					g = n(8962),
					h = (n(5553), ["aria-message", "aria-error", "aria-success"]),
					p = n(5602),
					o = (window.document, window.MutationObserver || window.WebKitMutationObserver || window
						.MozMutationObserver);

				function a(e) {
					if (void 0 !== e) {
						c = c || g.Language, u = "";
						var t = f.checkDialogShow(),
							n = [],
							r = new d(document.activeElement);
						t && 0 < t.length && !r.aria.dialog && (document.activeElement.blur(), t.aria.tabindex = 0,
							t.focus(), u = t.aria.lastText);
						var o, a = !1;
						for (o in e) {
							var i, s = o.type,
								l = o.target;
							switch (s) {
								case "childList":
									a = !0;
									break;
								case "attributes":
									-1 < [].indexOf.call(h, o.attributeName) && ((i = new d(l).attr(o
										.attributeName)) && [].indexOf.call(n, l) < 0 && (u += c[o
										.attributeName] + i, n.push(l)))
							}
						}
						a && (p.end(), g.status && p.start()), u.length
					}
				}
				e.exports = {
					start: function(e) {
						!r && o && (r = new o(a)).observe(e.body, {
							childList: !1,
							subtree: !0,
							attributes: !0,
							attributeOldValue: !0
						})
					},
					end: function() {
						r && r.disconnect()
					}
				}
			},
			7524: function(e, t, n) {
				var r = n(5553),
					o = n(8057);
				e.exports = {
					start: function() {
						var e = (e = new o('[name="description"]', document.head).attr("content")) ||
							document.title;
						r.play(e)
					}
				}
			},
			1151: function(e, t, n) {
				var r = n(5045),
					o = n(8057),
					a = n(5553),
					i = n(1820),
					s = n(4239),
					l = n(9228),
					c = n(1266),
					u = n(8962);

				function d(e) {
					var t;
					2 != u.readtype && (c.checkDialogShow(), t = e.target, "true" == (t = new o(t)).ariaAttr(
						"skipall") || 0 < t.closest('[aria-skipall="true"]').length || (t.aria.dialog || (
						globalActiveElem = t), i.focus(e), s.focus(e), r.setClass(t, e.view.document
						.body), a.play(t.aria.lastText), l.triggerEvent(e.target, "mouseover")))
				}
				e.exports = {
					start: function(e) {
						e = e || document, new o(e.body).on("focusin", "*", d)
					},
					end: function(e) {
						e = e || document, new o(e.body).off("focusin", "*", d)
					}
				}
			},
			1820: function(e, t, n) {
				var r = n(8057);
				e.exports = {
					focus: function(e) {
						var t;
						"menu" != (e = e.target).getAttribute("role") || (t = new r(e).aria.owns) &&
							setTimeout(function() {
								(t = new r(t)).show()
							}, 35)
					},
					blur: function() {}
				}
			},
			4239: function(e, t, n) {
				var r = n(8057);
				e.exports = {
					focus: function(e) {
						var t = e.target;
						"select" != t.getAttribute("role") || (t = (e = new r(t)).aria.owns) && ((t = new r(
							t)).ariaAttr("ownsfor", "#" + e.attr("id")), t.find("li").attr(
							"tabindex", -1), t.attr("role", "selectlistbox"), (e.ariaAttr(
							"listitem") ? new r(e.ariaAttr("listitem")) : t.find("li")).attr("role",
							"option"), t.show())
					},
					blur: function() {}
				}
			},
			7629: function(e, t, n) {
				var o = n(8057),
					a = n(57),
					i = n(2264),
					s = n(8962);
				n(1712), n(2303), n(7246), n(8093), n(9672), n(5932), n(5779), n(7598);
				var l = n(9228);

				function r(t) {
					var n, r;
					2 != s.readtype && (n = t.view.document, r = t.keyCode || t.which || t.charCode, t.target != n
						.body && (setTimeout(function() {
								var e = new o(n.activeElement);
								"true" == e.ariaAttr("skipall") || 0 < e.closest('[aria-skipall="true"]')
									.length || e.aria.hidden && 9 == r && (t.shiftKey ? e.aria.preFocus && e
										.aria.preFocus.focus() : e.aria.nextFocus && e.aria.nextFocus
										.focus())
							}, 5), window.preAcitveElem = n.activeElement, a.execEvent(i.SizzleKeyDown, t),
							13 == r && new o(t.target).click(), 27 == r && l.triggerEvent(document.body,
								"mouseover")))
				}
				e.exports = {
					start: function(e) {
						e = e || document, new o(e.body).on("keydown", "*", r)
					},
					end: function(e) {
						e = e || document, new o(e.body).off("keydown", "*", r)
					}
				}
			},
			1712: function(e, t, n) {
				var r = n(8057),
					o = n(9228),
					a = n(1266),
					i = n(57),
					n = n(2264);

				function s(e) {
					var t = a.eventKeyCode(e),
						n = !0;
					(n = "dialogclose" == new r(e.target).aria.action && 13 == t ? !1 : n) && !a.checkKeyCode(e, a
						.keyCodeSettings.dialogClose) || (t = a.checkDialogShow()) && (0 < t.closest(
						".aria-container").length ? new r(".icon-close").click() : 0 < (e = n ? t.find(
						"[aria-action='dialogclose']") : new r(e.target)).length ? e.click() : (t.css(
						"display", "none"), t.attr("tabindex", -1)))
				}
				i.registerEvent(n.globalListen, s, 0), e.exports = {
					doEventTab: function(e) {
						var t = !1,
							n = a.checkDialogShow();
						return !!n && (!!a.checkKeyCode(e, 9) && ((e = new r(e.target || e.currentTarget))
							.aria.isDialog || (t = !0), (t = e.aria.dialog.firstNode != n
								.firstNode || t) ? (o.stopBubble(), o.stopDefault(), !0) : void 0))
					},
					KeyEsc: s
				}
			},
			9564: function(e, t, n) {
				var r, o, a = n(8962),
					i = n(57),
					s = n(2264),
					l = n(8057),
					c = n(1266),
					u = n(755);

				function d(e) {
					var t;
					if (a.canRead = !0, (t = e).keyCode || t.which || t.charCode, !c.checkKeyCode(t, c
							.keyCodeSettings.wakeup) || ((a.status ? o : r)(), 0)) return i.execEvent(s
						.globalListen, e)
				}
				e.exports = {
					start: function(e, t) {
						u.check() && (r = e, o = t, new l(document.body).on("keydown", d))
					}
				}
			},
			8093: function(e, t, n) {
				var r = n(8057),
					o = n(57),
					a = n(2264),
					i = n(1266);

				function s(e) {
					var t = new r(e.target);
					if ("menu" == t.aria.role) {
						var n = new r(t.aria.owns);
						if (0 != n.length) switch (i.eventKeyCode(e)) {
							case 9:
							case 13:
								n.hide();
								break;
							case 37:
							case 38:
								n.isHidden() && n.show(), n.find("[role='menuitem']").last().focus();
								break;
							case 39:
							case 40:
								n.isHidden() && n.show(), n.find("[role='menuitem']").first().focus()
						}
					}
				}
				o.registerEvent(a.SizzleKeyDown, s, 0), e.exports = {
					doEvent: s
				}
			},
			9672: function(e, t, n) {
				var i = n(9228),
					s = n(8057),
					r = n(57),
					o = n(2264),
					l = n(1266);

				function a(e) {
					var t = new s(e.target);
					if ("menuitem" == t.aria.role) {
						var n = e.ctrlKey,
							r = e.shfitKey,
							o = e.altKey;
						if (!(n || r || o)) {
							var o = l.eventKeyCode(e),
								a = t.closest("[role='menulistbox']");
							switch (o) {
								case 40:
									i.stopBubble(e), i.stopDefault(e),
										function(e, t) {
											t = t.find("[role='menuitem']");
											0 != t.length && ((e = e.index(t)) < t.length - 1 ? t[e + 1] : t[0])
												.focus()
										}(t, a);
									break;
								case 38:
									i.stopBubble(e), i.stopDefault(e),
										function(e, t) {
											t = t.find("[role='menuitem']"), e = e.index(t);
											0 < e && t[e - 1].focus()
										}(t, a);
									break;
								case 9:
								case 27:
									c(a)
							}
						}
					}
				}

				function c(e) {
					0 < e.length && (e.aria.expanded = !1, e.hide(), new s(e.ariaAttr("ownsfor")).focus())
				}
				r.registerEvent(o.SizzleKeyDown, a, 0), e.exports = {
					doEvent: a
				}
			},
			7246: function(e, t, n) {
				var c = n(9228),
					u = n(8057),
					r = n(57),
					o = n(2264),
					d = n(1266);

				function a(e) {
					var t, n, r, o = new u(e.target);
					if ("option" == o.aria.role && "option" !== o.aria.nodeName) {
						var a = e.ctrlKey,
							i = e.shfitKey,
							s = e.altKey;
						if (!(a || i || s)) {
							var s = d.eventKeyCode(e),
								l = o.closest("[role='selectlistbox']");
							switch (s) {
								case 40:
									c.stopBubble(e), c.stopDefault(e), r = (n = o).parent().child(), (n = n.index(
										r)) < r.length - 1 && r[n + 1].focus();
									break;
								case 38:
									c.stopBubble(e), c.stopDefault(e), n = (t = o).parent().child(), 0 < (t = t
										.index(n)) && n[t - 1].focus();
									break;
								case 13:
									o.firstNode.click();
									break;
								case 9:
								case 27:
									0 < (t = l).length && (t.aria.expanded = !1, t.hide())
							}
						}
					}
				}
				r.registerEvent(o.SizzleKeyDown, a, 0), e.exports = {
					doEvent: a
				}
			},
			5932: function(e, t, n) {
				var r = n(57),
					o = n(2264),
					a = n(1266),
					i = n(8057),
					s = n(5045);

				function l(e) {
					var t;
					a.checkKeyCode(e, a.keyCodeSettings.changeRegion.next) && (t = new i(e.target, e.view.document
						.body), 0 != (t = new i(t.aria.regionN)).length && (s.setClass(t, e.view.document
						.body), t.focus()))
				}

				function c(e) {
					var t;
					a.checkKeyCode(e, a.keyCodeSettings.changeRegion.pre) && (t = new i(e.target, e.view.document
						.body), 0 != (t = new i(t.aria.regionP)).length && (s.setClass(t, e.view.document
						.body), t.focus()))
				}
				r.registerEvent(o.globalListen, l, 0), r.registerEvent(o.globalListen, c, 0), e.exports = {
					goNext: l,
					goPre: c
				}
			},
			2303: function(e, t, n) {
				var a = n(9228),
					i = n(8057),
					r = n(57),
					o = n(2264),
					s = n(1266);

				function l(e) {
					var t = new i(e.target);
					if ("select" == t.aria.role) {
						var n = e.ctrlKey,
							r = e.shfitKey,
							o = e.altKey;
						if (!(n || r || o))
							if ("select" !== t.aria.nodeName && t.aria.owns) switch (s.eventKeyCode(e)) {
								case 40:
								case 38:
									a.stopBubble(), a.stopDefault(),
										function(e) {
											var t, n = e.controls;
											n && n.firstNode && (t = n.firstNode);
											t = t || new i(e.aria.owns).find("[role='option']").first();
											t && t.focus()
										}(t);
									break;
								case 9:
									new i(t.aria.owns).hide()
							}
					}
				}
				r.registerEvent(o.SizzleKeyDown, l, 0), e.exports = {
					doEvent: l
				}
			},
			5779: function(e, t, n) {
				var a = n(8057),
					r = n(57),
					o = n(2264),
					i = n(1266),
					s = n(9228);

				function l(e) {
					var t = new a(e.target);
					if ("tab" == t.aria.role) {
						var n = e.ctrlKey,
							r = e.shfitKey,
							o = e.altKey;
						if (!(n || r || o)) switch (i.eventKeyCode(e)) {
							case 40:
							case 39:
								s.stopBubble(e), s.stopDefault(e),
									function(e) {
										e.attr("activeTabindex", 0);
										e = e.find("[role='tablistbox']").first();
										null != e && e.focus()
									}(t);
								break;
							case 38:
							case 37:
								s.stopBubble(e), s.stopDefault(e),
									function(e) {
										e.attr("activeTabindex", e.find("[role='tablistbox']").length - 1);
										e = e.find("[role='tablistbox']").last();
										null != e && e.focus()
									}(t)
						}
					}
				}
				r.registerEvent(o.SizzleKeyDown, l, 0), e.exports = {
					doEvent: l
				}
			},
			7598: function(e, t, n) {
				var a = n(8057),
					r = n(57),
					o = n(2264),
					i = n(1266),
					s = n(9228);

				function l(e) {
					var t = new a(e.target);
					if ("tablistbox" == t.aria.role) {
						var n = e.ctrlKey,
							r = e.shfitKey,
							o = e.altKey;
						if (!(n || r || o)) switch (i.eventKeyCode(e)) {
							case 40:
							case 39:
								s.stopBubble(e), s.stopDefault(e),
									function(e) {
										var t = e.attr("aria-ownsfor"),
											n = new a(t),
											e = n.find("[role='tablistbox']"),
											t = n.attr("activetabindex");
										t = t || 0;
										t < e.length - 1 && (t = parseInt(t) + 1, n.attr("activetabindex", t),
											e[t].focus(), e[t].click(), s.triggerEvent(e[t], "mouseover"))
									}(t);
								break;
							case 38:
							case 37:
								s.stopBubble(e), s.stopDefault(e),
									function(e) {
										var t = e.attr("aria-ownsfor"),
											n = new a(t),
											e = n.find("[role='tablistbox']"),
											t = n.attr("activetabindex");
										t = t || 0;
										0 < t && (t = parseInt(t) - 1, n.attr("activetabindex", t), e[t]
										.focus(), e[t].click(), s.triggerEvent(e[t], "mouseover"))
									}(t)
						}
					}
				}
				r.registerEvent(o.SizzleKeyDown, l, 0), e.exports = {
					doEvent: l
				}
			},
			1194: function(e, t, n) {
				var r, o = n(8057),
					a = n(5045),
					i = n(5553),
					s = n(7623),
					l = n(8962);

				function c(e) {
					var t, n;
					l.canRead = !0, 2 != l.readtype && e.target != document.body && (void 0 !== r && e.target ==
						r || 1 == e.target.nodeType && ("true" == (t = new o(e.target)).ariaAttr("skipall") ||
							0 < t.closest('[aria-skipall="true"]').length || (n = document.activeElement, t.aria
								.focusable || 0 == t.find(n).length && ((n = t.aria.firstFocus) ? n.focus() : (
									0 < t.child().length && (t = new o(t.child()[0])), a.setClass(t, e.view
										.document.body), 0 < new o(e.target, e.view.document.body).find("*")
									.length || i.play(t.aria.lastText))), r = e.target)))
				}
				e.exports = {
					start: function(e) {
						e = e || document, new o(e.body).on("click", "*", c), new o(e.body).on("click",
							'[aria-action="dialogclose"]', s.dialogClose)
					},
					end: function(e) {
						e = e || document, new o(e.body).off("click", "*", c), new o(e.body).off("click",
							'[aria-action="dialogclose"]', s.dialogClose)
					}
				}
			},
			7623: function(e, t, n) {
				var r = n(8057),
					o = n(9228);
				e.exports = {
					dialogClose: function() {
						var e = o.arrToSizzle(o.HtmlElemRoles.dialog);
						0 < (e = new r(this).closest(e)).length && (e.aria.tabindex = -1, e.hide(),
							globalActiveElem && globalActiveElem.focus())
					}
				}
			},
			630: function(e, t, n) {
				var r = n(8057),
					o = n(5553),
					a = n(8962);
				var i, s = !1,
					l = {
						screenX: 0,
						screenY: 0
					};

				function c(t) {
					t = function(e) {
						e || ((e = window.event).target = e.srcElement, e.layerX = e.offsetX, e.layerY = e
							.offsetY);
						return e.mx = e.pageX || e.clientX + document.body.scrollLeft, e.my = e.pageY || e
							.clientY + document.body.scrollTop, e
					}(t);
					var n = new r(t.target);
					if (!n.aria.skipall || 0 != n.closest("#ariaToptoolbar").length) {
						if (2 == a.readtype) return s || (o.setContiueObj(n), s = !0), setTimeout(function() {
							l.screenX == t.screenX && l.screenY == t.screenY && o.setContiueObj(n)
						}, 3e3), l.screenX = t.screenX, void(l.screenY = t.screenY);
						s = !1, i && t == i || ("BODY" != t.target.nodeName ? (setTimeout(function() {
							var e;
							5 < Math.abs(l.screenX - t.screenX) && 5 < Math.abs(l.screenY - t
								.screenY) && (e = new r(t.target), [].indexOf.call(["td", "li",
									"dd", "label", "span", "a", "p"
								], n.aria.role) < 0 && 3 < e.find("*").length || 2 < e.find("*")
								.length && 48 < n.aria.lastText || o.play(n.aria.lastText))
						}, 300), l.screenX = t.screenX, l.screenY = t.screenY, i = t) : o.play(document.body
							.title))
					}
				}
				e.exports = {
					start: function(e) {
						e = e || document, new r(e).on("mouseover", "*:not([aria-hidden='true'])", c)
					},
					end: function(e) {
						e = e || document, new r(e).off("mouseover", "*:not([aria-hidden='true'])", c)
					}
				}
			},
			8141: function(e, t, n) {
				var r = n(8057),
					o = n(5553);

				function a(e) {
					e = new r(e.target);
					o.play(e.aria.lastText)
				}
				e.exports = {
					start: function(e) {
						e = e || document, new r(e).on("change", "*", a)
					},
					end: function(e) {
						e = e || document, new r(e).off("change", "*", a)
					}
				}
			},
			3827: function(e, t, n) {
				var r, l = n(8057),
					o = n(9228),
					a = n(8458),
					i = n(5602),
					s = n(954);
				if (!o.isIE()) try {
					function c(e) {
						var t = window.history[e],
							n = new Event(e);
						return function() {
							var e = t.apply(this, arguments);
							return n.arguments = arguments, window.dispatchEvent(n), e
						}
					}
					history.pushState = c("pushState"), history.replaceState = c("replaceState")
				} catch (e) {}
				var u = location.href;
				var d = 100,
					f = 0;

				function g(e) {
					f || (f = (new Date).getTime() + d, setTimeout(function() {
						f && h()
					}, d)), f < (new Date).getTime() ? (h(), f = 0) : 0
				}

				function h(e) {
					s.init().then(function(e) {
						a.start(), i.end(), i.start()
					})
				}

				function p(e, t, n, r, o) {
					for (var a = r.getElementsByTagName("iframe"), i = 0; i < a.length; i++) {
						var s = a[i].contentWindow;
						try {
							s.document.body && (o ? (new l(s.document.body).on(e, t, n), new l(s.document.body)
								.attr("ariaevent", "true")) : (new l(s.document.body).off(e, t, n), new l(s
								.document.body).removeAttr("ariaevent")), p(e, t, n, s.document, o))
						} catch (e) {}
					}
				}
				e.exports = {
					start: function() {
						var e;
						o.addEventListener(window, "pushState", h), o.addEventListener(window,
								"replaceState", h), new l(document.body).on("DOMNodeInserted", g),
							"onhashchange" in window && (void 0 === document.documentMode || 8 === document
								.documentMode) ? window.onhashchange = h : e = setInterval(function() {
								u == location.href || (u = location.href, 0) || (h(), clearInterval(e),
									e = null)
							}, 150)
					},
					end: function() {
						new l(document.body).off("DOMNodeInserted", g), window.removeEventListener(
								"pushState", h), window.removeEventListener("replaceState", h),
							"onhashchange" in window && (void 0 === document.documentMode || 8 === document
								.documentMode) && (window.onhashchange = null), clearInterval(r), r = null
					},
					removelistenIncludeIframe: function(e, t, n) {
						p(e, t, n, document, !1), new l(document.body).off(e, t, n)
					},
					listenIncludeIframe: function(e, t, n) {
						p(e, t, n, document, !0), new l(document.body).on(e, t, n)
					}
				}
			},
			5553: function(e, t, n) {
				var r = n(9228),
					o = n(9724),
					a = n(8962),
					i = n(9632),
					s = n(7316),
					l = n(57),
					c = n(2264),
					u = n(8057),
					d = n(4001),
					f = new Audio,
					g = [],
					h = 48,
					p = 0,
					m = !1;

				function b(e) {
					e && "string" == typeof(e = e.jTool ? e.aria.lastText : e) && "," != e && (e.length > h ? (g = r
						.splitBylength(e, h), x = [], w(g[0])) : a.hostEnable.voice && a.voice.enable ? (
						g = [], p = 0, x = [], w(e)) : a.bigsrc && C(e))
				}
				var v = Date.now(),
					y = !1;

				function w(e) {
					m = a.canRead;
					var n;
					Date.now() - v < 150 || !m || i.post(s.api.ttsurl, {
						text: n = e
					}).then(function(e) {
						x.push(a.serviceUrl + e), 0 < g.length && T(g[1]);
						var t = y ? 200 : 0;
						a.bigsrc && C(n), y = !0, setTimeout(function() {
							k(a.serviceUrl + e), v = Date.now(), y = !1
						}, t)
					})
				}
				f.addEventListener("ended", function() {
					g.length > p + 1 ? (k(x[p += 1]), a.bigsrc && C(g[p]), p + 1 < g.length && T(g[p +
						1])) : (g = [], p = 0, g = [], 2 == a.readtype && (0 < S.aria.atomicElem.length ? E(
							S.aria.atomicElem.nextNode()) : E(S.nextNode())))
				}, !1);
				var x = [];

				function T(e) {
					i.post(s.api.ttsurl, {
						text: e
					}).then(function(e) {
						x.push(a.serviceUrl + e)
					})
				}

				function k(e) {
					a.hostEnable.voice && a.voice.enable && ((f = f || new Audio) && !f.paused && f.pause(), f
						.load(), f.loop = !1, f.playbackRate = a.voice.rate, f.defaultPlaybackRate = a.voice
						.rate, f.src = e, (e = f.play()) && e.then(function() {
							setTimeout(function() {}, 1e3 * f.duration)
						}).catch(function(e) {}))
				}

				function C(e) {
					if (a.big5 && (e = d.toBig5(e)), a.py && "undefined" != typeof ariaPY) {
						new u("#accscreen #acctip").html("");
						for (var t = 0; t < e.length; t++) {
							for (var n = ariaPY.parse_word(e[t]), r = '<div class="pinyin">', o = 0; o < n
								.length; o++) !1 !== n[o] && (r += "<b><i>" + n[o][1] + "</i><i>" + n[o][0] +
								"</i></b>");
							r += "</div>", new u("#accscreen #acctip").append(r)
						}
					} else new u("#accscreen #acctip").html(e)
				}
				var S;

				function A() {
					f && !f.paused && f.pause(), f = null
				}

				function E(e) {
					var t;
					void 0 !== e && 0 != (e = !e.jTool ? new u(e) : e).length && (e.isHidden() ? E(e.nextNode()) : (
						(S = e).focus(), 0 < (t = e.aria.lastText).length && "," != t ? (e.focus(), b(r
							.formatStrToRead(e.aria.lastText, !0))) : E(e.nextNode())))
				}
				r.addEventListener(window, "visibilitychange", function(e) {
					"hidden" == document.visibilityState && f && !f.paused && f.pause();
					a.hostEnable.voice && a.voice.enable || "visible" == document.visibilityState && f
					.play()
				}), l.registerEvent(c.endService, A, 0), l.registerEvent(c.globalEnd, A, 0), e.exports = {
					play: b,
					setVoiceid: function(e) {
						var t = r.genID();
						return e.voiceid = t, o.set("aria/voiceid", t), e
					},
					pText: void 0,
					stop: A,
					setContiueObj: E
				}
			},
			1689: function(e, t, n) {
				var o = n(8057);
				n(9228);

				function a(e) {
					var t, n, r;
					void 0 !== (e = e || window.event) && e.view == top && (t = e.clientX, n = e.clientY, t = (r =
							function(e) {
								var t = e.view;
								if (t == window || !t.parent) return {
									x: e.clientX,
									y: e.clientY
								};
								var n = t.parent;
								var r = t.location,
									o = null,
									a = 0,
									i = 0;
								for (; null != n && void 0 !== n;) {
									for (var s = 0; s < n.frames.length; s++)
										if (r == n.frames[s].location) {
											o = n.frames[s].frameElement;
											break
										} for (; a += o.offsetLeft - o.scrollLeft || 0, i += o.offsetTop - o
										.scrollTop || 0, o = o.offsetParent;);
									r = n.location, n = n.parent
								}
								return {
									x: a + e.clientX,
									y: i + e.clientY
								}
							}(e)).x, n = r.y, e = new o("#ariamouseten1").firstNode, r = new o("#ariamouseten2")
						.firstNode, e.style.left = t - 250 + "px", e.style.top = n - 5 + "px", r.style.left =
						t - 5 + "px", r.style.top = n - 250 + "px")
				}
				e.exports = {
					start: function(e) {
						var t, n, r;
						(e = e || document) == document && (n = document.createElement("div"), r = document
							.createElement("div"), n.style.width = "500px", n.style.height = "4px", n
							.className = "mouseten", n.style.left = 0, n.setAttribute("id",
								"ariamouseten1"), n.setAttribute("aria-skipall", "true"), document.body
							.appendChild(n), r.style.height = "500px", r.style.width = "4px", r
							.className = "mouseten", r.style.top = 0, r.setAttribute("aria-skipall",
								"true"), r.setAttribute("id", "ariamouseten2"), document.body
							.appendChild(r), a(t)), new o(e.body).on("mousemove",
							"*:not([type='iframe'])", a)
					},
					end: function(e) {
						(e = e || document) == document && (new o("#ariamouseten1").remove(), new o(
							"#ariamouseten2").remove()), new o(e.body).off("mousemove",
							"*:not([type='iframe'])", a)
					}
				}
			},
			4001: function(e) {
				e.exports = {
					toBig5: function(e) {
						if (e) {
							for (var t = "", n = 0; n < e.length; n++) {
								var r = e[n],
									o =
									"皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調叠諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐國愛賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為隻兇準啟闆裡靂餘鍊洩" [
										"皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调迭谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞国爱赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄"
										.indexOf(r)
									];
								t += void 0 === o ? r : o
							}
							return t
						}
					}
				}
			},
			1282: function(e, t, n) {
				var o = n(8057),
					r = n(9228);
				e.exports = {
					start: function(e) {
						e = new o("A", e), r.each(e, function(e, t) {
							var n = new o(t),
								t = n.attr("href");
							if (t && -1 < t.indexOf("//") && (-1 < t.indexOf("http:") || -1 < t
									.indexOf("https:"))) try {
								var r = /^[^?#]*\//.exec(t)[0];
								/^\w+\:\/\/\/?[^\/]+/.exec(r)[0] != document.location.protocol +
									document.location.host && t.indexOf("aria=1") < 0 && (t =
										0 < t.indexOf("?") ? t + "&aria=1" : t + "?aria=1", n
										.attr("href", t))
							} catch (e) {}
						})
					}
				}
			},
			5020: function(e, t, n) {
				n(8057);
				e.exports = {
					iframeMouse: function(e) {}
				}
			},
			8458: function(e, t, n) {
				var c = n(9228),
					u = n(8057),
					d = n(8962);

				function i(e, t) {
					e.aria.tabindex || (e.aria.tabindex = t)
				}

				function r(e, t) {
					var n = e.selector;
					if (n) {
						var r, o = new u(n, t.body);
						if (!o.hasClass("setedaria") && 0 < o.length) {
							for (var a in e.focusable && !o.isHidden() ? o.aria.focusable = 0 : o.aria.focusable = -
									1, e.role && (o.aria.role = e.role), e.prop) null != e.prop[a] && Object
								.hasOwnProperty.call(e.prop, a) && (r = e.prop[a], o.ariaAttr(a, r));
							e.prop && e.prop.dialogclose && o.find(e.prop.dialogclose).ariaAttr("action",
								"dialogclose")
						}
					}
				}
				e.exports = {
					start: function(e) {
						var a;
						e || (e = document, function() {
							var e = ["ariatoolcss", "ariaToptoolbar", "accscreen", "ariamouseten1",
								"ariamouseten2"
							];
							if ("true" != document.body.getAttribute("ariaCopy")) {
								var t = document.createElement("div");
								t.id = "ariaContainer", t.className = "elemscale";
								for (var n = document.body.children, r = n.length - 1; - 1 <
									r; r--) {
									var o = n[r];
									[].indexOf.call(e, o.id) < 0 && t.insertBefore(o, t.firstChild)
								}
								document.body.insertBefore(t, document.body.firstChild), document
									.body.setAttribute("ariaCopy", !0)
							}
						}()), a = e, e = d.curpageConf, a.body && (function(e) {
							var t = d.golabSkipAll;
							t && (n = new u(t, e.body), c.each(n, function(e, t) {
								new u(t);
								t.setAttribute("aria-skipall", "true")
							}));
							var n = d.golabFocus;
							n && (r = new u(n, e.body), c.each(r, function(e, t) {
								t.setAttribute("tabindex", 0)
							}));
							var r = d.golabRegion1;
							r && (o = new u(r, e.body), c.each(o, function(e, t) {
								t = new u(t);
								t.ariaAttr("region", "true"), t.ariaAttr("regiontype",
									1), t.attr("tabindex", 0)
							}));
							var o = d.golabRegion2;
							o && (a = new u(o, e.body), c.each(a, function(e, t) {
								t = new u(t);
								t.ariaAttr("region", "true"), t.ariaAttr("regiontype",
									2), t.attr("tabindex", 0)
							}));
							var a = d.golabRegion3;
							a && (i = new u(a, e.body), c.each(i, function(e, t) {
								t = new u(t);
								t.ariaAttr("region", "true"), t.ariaAttr("regiontype",
									3), t.attr("tabindex", 0)
							}));
							var i = d.golabRegion4;
							i && (s = new u(i, e.body), c.each(s, function(e, t) {
								t = new u(t);
								t.ariaAttr("region", "true"), t.ariaAttr("regiontype",
									4), t.attr("tabindex", 0)
							}));
							var s = d.golabSkipTheme;
							s && (l = new u(s, e.body), c.each(l, function(e, t) {
								new u(t).ariaAttr("skiptheme", "true")
							}));
							var l = d.golabSkipScale;
							l && (e = new u(l, e.body), c.each(e, function(e, t) {
								new u(t).ariaAttr("skipscale", "true")
							}))
						}(a), function(n) {
							var e = d.golbalElems;
							e && c.each(e, function(e, t) {
								r(t, n)
							})
						}(a), e && e.name && null != e.value && null != e.value.name ? function(e,
							n) {
							e.value && e.value.elems && c.each(e.value.elems, function(e, t) {
								r(t, n)
							});
							e.value && e.value.templateElems && c.each(e.value.templateElems,
								function(e, t) {
									r(t, n)
								})
						}(e, a) : function(e) {
							var t = new u("form,.login_box", e.body);
							c.each(t, function(e, t) {
								t = new u(t);
								"true" != t.ariaAttr("region") && 0 == t.closest(
									'[aria-region="true"]').length && (t.ariaAttr(
										"region", "true"), t.ariaAttr("regiontype", 3),
									t.aria.focusable = 1)
							});
							t = new u("header,nav,#header,#nav,.header,.nav,.left-nav,.d-subnav", e
								.body);
							c.each(t, function(e, t) {
								t = new u(t);
								"true" != t.ariaAttr("region") && 0 == t.closest(
									'[aria-region="true"]').length && (t.ariaAttr(
										"region", "true"), t.ariaAttr("regiontype", 2),
									t.aria.focusable = 1)
							});
							t = new u(".content,#content,.wrapper,#wrapper,.main-r,.main,#main", e
								.body);
							c.each(t, function(e, t) {
								t = new u(t);
								"true" != t.ariaAttr("region") && 0 == t.closest(
									'[aria-region="true"]').length && (t.ariaAttr(
										"region", "true"), t.ariaAttr("regiontype", 1),
									t.aria.focusable = 1)
							});
							e = new u(".footer,#footer,footer", e.body);
							c.each(e, function(e, t) {
								t = new u(t);
								"true" != t.ariaAttr("region") && 0 == t.closest(
									'[aria-region="true"]').length && (t.ariaAttr(
										"region", "true"), t.ariaAttr("regiontype", 4),
									t.aria.focusable = 1)
							})
						}(a), e = new u("[role]:not(.setedaria)", a.body).nodeList, c.each(e,
							function(e, t) {
								var n = !1,
									r = new u(t);
								r.attr("id") || r.attr("id", c.genID()), r.addClass("setedaria"), r
									.isHidden() ? (i(r, -1), n = !0) : (!n && -1 < [].indexOf.call(c
											.HtmlElemRoles.foucsable0, r.aria.role) && (i(r, 0),
											n = !0), !n && -1 < [].indexOf.call(c.HtmlElemRoles
											.foucsable1, r.aria.role) && (i(r, -1), n = !0), !n && -
										1 < [].indexOf.call(c.HtmlElemRoles.foucsable0, r.aria
											.nodeName) && (i(r, 0), n = !0), !n && -1 < [].indexOf
										.call(c.HtmlElemRoles.foucsable1, r.aria.nodeName) && (i(r,
											-1), n = !0));
								n = r.aria.role;
								if (r.aria.owns && n) {
									var o = new u(r.aria.owns, a.body);
									switch (o.ariaAttr("ownsfor", "#" + r.attr("id")), o.find("li")
										.attr("tabindex", -1), o.attr("role", n + "listbox"), n) {
										case "menu":
											(r.ariaAttr("listitem") ? new u(r.ariaAttr("listitem"),
												a.body) : o.find("li")).attr("role", "menuitem");
											break;
										case "select":
											(r.ariaAttr("listitem") ? new u(r.ariaAttr("listitem"),
												a.body) : o.find("li")).attr("role", "option");
											break;
										case "tab":
											o.attr("tabindex", "-1"), o.find("a").attr("tabindex",
												"-1")
									}
								}
							}), e = new u("p:not(.setedaria)", a.body), c.each(e, function(e, t) {
							var n = new u(t);
							n.addClass("setedaria");
							t = c.reMoveHtml(n.text());
							t && 0 < t.length && (n.aria.tabindex = 0)
						}), e = new u("[aria-hidden='true']", a.body), c.each(e, function(e, t) {
							new u(t).aria.tabindex = -1
						}), new u(a.body).addClass("ariatheme"), e = new u(a.body).find(
							"*:not(.ariatheme):not(svg)"), c.each(e, function(e, t) {
							try {
								var n;
								1 == t.nodeType && "svg" != t.nodeName.toLowerCase() && ((n =
									new u(t)).aria && (n.aria.skipall || n.aria
									.skiptheme) || n.addClass("ariatheme"))
							} catch (e) {}
						}), new u("[aria-region='true']").attr("tabindex", "0"), function(e) {
							var t = new u("[aria-atomic='true']", e.body).find("*");
							c.each(t, function(e, t) {
								t.setAttribute("tabindex", -1)
							}), new u(e.body).on("keydown", "[aria-atomic='true']", function(
							e) {
								13 != e.keyCode || 0 < (e = new u(this).find(
										"a,[role='a'],[role='button']")).length && e
									.firstNode.click()
							})
						}(a))
					}
				}
			},
			6057: function(e, t, n) {
				var s = n(9228),
					l = n(9724),
					c = n(8962),
					u = n(7316),
					r = n(8057);

				function o() {
					var e = "",
						t = c.curpageConf;
					t && t.value.pageCss && (e += t.value.pageCss);
					var n = ".ariatheme:not(i):not(input) ";
					n += "{outline-offset: -1px;";
					var r = ".ariatheme a{",
						o = c.Theme;
					e += ".ariaHide{display:none !important;}", o && (c.hostEnable.region && (e += d(o.region,
						".ariaregion"), o.region.link && (e += ".ariaregion a{ ", e += " color:" + o
						.region.link + "!important;", e += "}")), o.backgroundColor && (n +=
						"background-color:" + o.backgroundColor + " !important;"), o.color && (n +=
						"color:" + o.color + " !important;"), o.link && (r += "color:" + o.link +
						" !important;"), e += "input:disabled{", o.backgroundColor && (e +=
						"background-color:" + o.backgroundColor + " !important;"), o.color && (e +=
						"color:" + o.color + " !important;"), e += "}");
					var a = c.scale,
						t = c.bodyfont;
					if (c.hostEnable.fontScal) {
						a = parseFloat(a), c.padding, c.spacing;
						if (e += "input[type='checkbox'],input[type='radio'] {", e += "height:  " + (t = c
								.bodyfont * a) + "px !important;", e += "width:   " + t + "px !important;", e +=
							"}", s.isMobile())
							for (var i = 10; i < 30; i++);
					}
					c.golabReplaceBg && (e += c.golabReplaceBg + "{", e += "background-image:none !important;", e +=
						"}"), o && (c.hostEnable.focus && (e += d(o.focus, ".ariafocus"), (t = o.focus.value) &&
							t.value && (delete t.value.outline, e += d(t, ".ariafocus *"))), c.hostEnable
						.mouseover && (e += d(o.mouseover, ".mouseover")));
					e = n + "}" + r + "}" + e, r = c.highlight;
					return c.hostEnable.highlight && r.enable && (r.rate && r.rate > a && r.rate, e +=
						".ariahighlight{", o && (r = o.highlight.backgroundColor, (a = o.highlight.color) && (
							e += " color: " + a + " !important;"), r && (e += "background-color: " + r +
							" !important;"), e += "}", (o = o.highlight.link) && (e += ".ariahighlight a{",
							e += " color: " + o + "  !important;", e += "}"))), l.set(u.keys.runtime.settings
						.css, e), e
				}

				function a() {
					var e = c.scale,
						t = "";
					t += ".elemscale{", t += "zoom:" + e + ";", t += "-moz-transform: matrix(" + e + ",0,0," + e +
						",0,0);", t += "transform-origin: left top;", t += "}", t += ".elemscale>*{", t +=
						"-moz-transform: none;", t += "-webkit-transform: none;", t += "-o-transform: none;", t +=
						"-ms-transform: none;", t += "transform: none;", t += "}", new r("#ariabodyscale").remove();
					e = document.createElement("style");
					e.setAttribute("id", "ariabodyscale"), e.innerHTML = t, document.body.appendChild(e), window
						.scrollTo((document.body.scrollWidth - document.body.offsetWidth) / 2, 0)
				}

				function i(e, t) {
					new r("#ariacss", e).remove();
					var n = e.createElement("style");
					n.setAttribute("type", "text/css"), n.setAttribute("id", "ariacss"), n.innerHTML = t, e.head
						.appendChild(n)
				}

				function d(e, t) {
					var n = "ariafocus" == t ? ":focus," : "";
					return e && e.enable && (n += t + "{", s.each(e, function(e, t) {
						"enable" != e && null != t && (n += s.toCssCamelCase(e) + ":" + t +
							" !important;")
					}), n += "}"), n
				}
				e.exports = {
					start: function(e) {
						e = e || document;
						var t = l.get(u.keys.runtime.settings.css) || o();
						0 == new r("#ariaiconstyle").length && new r(e.head).append(
							'<link rel="stylesheet" id="ariaiconstyle" href="' + c.road +
							'css/font.min.css"></link>'), i(e, t), s.isMobile() || e != document || a()
					},
					end: function(e) {
						e = e || document, new r("#ariacss", e.parentNode).remove(), new r("#ariaiconstyle",
								e.parentNode).remove(), new r("#ariabodyscale", e.parentNode).remove(),
							new r("#ariacss", e).remove(), new r("#ariaiconstyle", e).remove(), new r(
								"#ariabodyscale", e).remove()
					},
					setSettingTheme: function(e) {
						i(e = e || document, o()), e == document && a()
					},
					setBodyTran: a,
					addPy: function() {
						var e = document.createElement("script");
						e.setAttribute("id", "ariapy"), e.setAttribute("charset", "UTF-8"), e.src = c.road +
							"html/pinyin.min.js", document.body.appendChild(e)
					},
					setMouseb: function(e) {
						var t = (e = e || document).createElement("style");
						t.setAttribute("title", "ariatoolbarstylemouse");
						var n = "\n * {\n";
						n += "cursor: url(" + c.road + "imgs/allaw.cur), auto;\n", t.innerHTML = n += "}\n",
							e.head.appendChild(t)
					},
					removeMouseb: function(e) {
						(e ? new r('[title="ariatoolbarstylemouse"]', e.head) : new r(
							'[title="ariatoolbarstylemouse"]')).remove()
					}
				}
			},
			5045: function(e, t, n) {
				var s = n(8057),
					r = n(9228),
					o = n(8962),
					a = n(57),
					n = n(2264);

				function i() {
					var i = new s(document.body).css("font-size"),
						i = parseInt(i, 10),
						e = new s("*:not(.setedfont)", document.body);
					r.each(e, function(e, t) {
						try {
							var n, r, o, a;
							1 != t.nodeType || "svg" == t.nodeName.toLowerCase() || (n = new s(t)).aria
								.canSetClass && (r = n.parent(), (o = n.css("font-size")) !== r.css(
									"font-size") && (a = parseInt(o, 10) > i ? parseInt(o, 10) : i, n
									.addClass("ariafont" + a + " setedfont")))
						} catch (e) {}
					})
				}
				a.registerEvent(n.startService, i, 0), e.exports = {
					setFontSize: i,
					setClass: function(e, t) {
						var n;
						0 != e.length && (t = t || document, new s(t).find("." + o.className.focus)
							.removeClass(o.className.focus), !e.aria.canSetClass || e.aria.skipall || e
							.aria.skiptheme || e.addClass(o.className.focus), (n = e.aria.regionElem) &&
							0 < n.length && !n.hasClass(o.className.region) && e.aria.canSetClass && (
								new s("." + o.className.region, t).removeClass(o.className.region), e
								.aria.skipall || e.aria.skiptheme || n.addClass(o.className.region)),
							n = e, 0 < (n = n = 1 === o.highlight.mode ? new s(n.aria.regionElem) : n)
							.length && o.highlight.enable && !n.hasClass(o.className.highlight) && e
							.aria.canSetClass && (new s(".ariahighlight", t).removeClass(
								"ariahighlight"), e.aria.skipall || e.aria.skiptheme || n.addClass(o
								.className.highlight)), 0 < n.length && o.highlight.enable && !n
							.hasClass("ariahighlightScale") && n.width() * o.highlight.rate + n
							.firstNode.offsetLeft <= document.body.scrollWidth && e.aria.canSetClass &&
							(new s(".ariahighlightScale", t).removeClass("ariahighlightScale"), e.aria
								.skipall || e.aria.skiptheme || n.addClass("ariahighlightScale")))
					}
				}
			},
			3385: function(e, t, n) {
				var i, r, o = n(9438),
					s = n(8057),
					l = n(9228),
					c = n(8962),
					a = n(1266),
					u = n(57),
					d = n(2264),
					f = (n(57), n(5553)),
					g = n(2713),
					h = n(6057),
					p = n(5045),
					m = c.hostEnable,
					b = n(7524);

				function v() {
					window.open(c.road + "instructions.html")
				}

				function y(e) {
					var t = c.py;
					e && (c.py = !t, t ? f.play("拼音已关闭") : f.play("拼音已启用")), (t = c.py) && "undefined" ==
						typeof ariaPY && h.addPy()
				}

				function w() {
					c.big5;
					"繁体" == new s("#accscreen-jt").html() ? (new s("#accscreen-jt").html("简体"), c.big5 = !1, f.play(
						"简体已启用")) : (new s("#accscreen-jt").html("繁体"), c.big5 = !0, f.play("繁体已启用"))
				}

				function x() {
					f.stop(), P(), I(), c.mouseten = null, K(), new s("#ariaToptoolbar").remove(), new s(
							"#accscreen").remove(), new s("#ariatoolcss").remove(), r || (clearInterval(r), r =
							null), new s(document.body).off("click", ".ariavoice", F), new s(document.body).off(
							"click", ".ariatopfixed", q), new s(document.body).off("click", ".ariathemebtn", z),
						new s(document.body).off("click", ".ariazoomb", D), new s(document.body).off("click",
							".ariazooms", H), new s(document.body).off("click", ".ariaVoiceRate", M), new s(document
							.body).off("click", ".ariaReadtype", R), new s(document.body).off("click", ".ariareset",
							S), new s(document.body).off("click", ".ariamouseb", _), new s(document.body).off(
							"click", ".ariamouseten", K), new s(document.body).off("click", ".ariahighlighttool",
						j), new s(document.body).off("click", ".ariaexit", O), new s(document.body).off("click",
							".ariablackgroud", U), new s(document.body).off("click", ".ariabigsrc", B), new s(
							document.body).off("click", "#accscreen-py", y), new s(document.body).off("click",
							"#accscreen-jt", w), new s(document.body).off("click", ".ariaReadScreen", C)
				}

				function T(e) {
					new s("#acccont-logo-img").css("background-image", "url(" + c.road + "/imgs/logo41.png)"),
						new s(".ariazoomb").attr("title", i.airafontScaleTextToBig), new s(".ariazooms").attr(
							"title", i.airafontScaleTextToSmall), new s(".ariaTopsubzoomb").html(i.ariaTopsubzoomb),
						new s(".ariaTopsubzooms").html(i.ariaTopsubzooms), new s(".ariathemebtn").attr("title", i
							.ariathemebtn + (c.Theme && c.Theme.displayName ? c.Theme.displayName : "无")), new s(
							".ariaTopsubtheme").html(i.ariaTopsubtheme), new s(".ariaReadScreen").attr("title", i
							.ariaReadScreen), new s(".ariaTopsubReadScreen").html(i.ariaTopsubReadScreen), new s(
							".ariaTopsubVoice").html(i.ariaTopsubVoice), N(), new s(".ariaTopsubVoiceRate").html(i
							.ariaTopsubVoiceRate), L(), new s(".ariaTopsubReadtype").html(i.ariaTopsubReadtype),
					E(), new s(".ariaTopsubten ").html(i.ariaTopsubten), A(), new s(".ariareset").attr("title", i
							.ariareset), new s(".ariaTopsubreset").html(i.ariaTopsubreset), new s(
							".ariatopfixedtext").attr("title", i.ariatopfixedtext), new s(".ariaTopsubtopfixed")
						.html(i.ariaTopsubtopfixed), new s(".ariaTopsubigsrc").html(i.ariaTopsubigsrc), new s(
							".ariabigsrc").attr("title", c.bigsrc ? i.ariabigsrcopen : i.ariabigsrcclose), new s(
							".ariaTopsubtopexit").html(i.ariaTopsubtopexit), new s(".ariaexit").attr("title", i
							.ariaexit), new s(".ariaacchelpbook").attr("title", i.ariaacchelpbook), new s(
							".ariaTopacchelpbook").html(i.ariaTopacchelpbook), F(e), q(), z(), _(), K(), B(), R(),
						M(), k(), r = setInterval(k, 3e3)
				}

				function k() {
					for (var e = new s(".onlineread"), t = new s(".readsrc").length < 2, n = 1; n < 7; n++) {
						var r, o = new s("[aria-regiontype='" + n + "']").length;
						t ? (r = '<div id="acccross" class="readsrc acccross' + n + " " + (0 == o ? "disable" :
								"") + '">', r += ' <span class="title">' + (i["regiontype" + n] || i[void 0]) +
								'<label>(<t id="regioncount' + n + '">' + o + "</t>)</label></span>", r +=
								'<span class="desc">ALT+' + n + "</span>", r += "</div>", e.append(r)) : o !=
							parseInt(new s(".regioncount" + n).html()) && (new s(".regioncount" + n).html(o), 0 <
								o ? new s(".acccross" + n).removeClass("disable") : new s(".acccross" + n).addClass(
									"disable"))
					}
					C()
				}

				function C(e) {
					var t = c.readsrc;
					void 0 !== e && (c.readsrc = !t, t = !t), t ? (new s(".notonlineread").addClass("hidden"),
						new s(".onlineread").removeClass("hidden")) : (new s(".notonlineread").removeClass(
						"hidden"), new s(".onlineread").addClass("hidden"))
				}

				function S(e) {
					c.reset(), T(), I(), c.defaultTheme = null, g.setSettingTheme(), c.canRead = !0, f.play(i
						.ariaresetsuccess)
				}

				function A() {
					"ariamouseb" == c.mousemode ? new s(".ariamouseb").attr("title", i.ariamousebopen) : new s(
							".ariamouseb").attr("title", i.ariamousebclose), c.mouseten ? new s(".ariamouseten")
						.attr("title", i.ariamousetenopen) : new s(".ariamouseten").attr("title", i
							.ariamousetenclose)
				}

				function E() {
					var e = 2 == c.readtype ? "2" : "1",
						e = i["ariaReadtype" + e];
					new s(".ariaReadtype").attr("title", e)
				}

				function N(e) {
					e || c.voice.enable ? new s(".ariavoice").attr("title", i.openvoice) : new s(".ariavoice").attr(
						"title", i.closevoice)
				}

				function L() {
					var e = c.voice.rate,
						t = "正常";
					1 != e && (t += e + "倍"), new s(".ariaVoiceRate").attr("title", i.ariaVoiceRate.replace("{0}",
						t))
				}

				function O() {
					f.stop(), x(), u.execEvent(d.globalEnd)
				}

				function R(e) {
					var t = c.readtype,
						n = new s(".ariaReadtype");
					e && (t = c.readtype = 2 == t ? 1 : 2, f.play(i["ariaReadtype" + (2 == c.readtype ? "2" :
						"1")])), 2 == t ? (n.removeClass("ariaicon-finger_reading"), n.addClass(
						"ariaicon-continuous_reading")) : (c.readtype = 1, n.addClass(
						"ariaicon-finger_reading"), n.removeClass("ariaicon-continuous_reading")), E()
				}

				function j(e) {
					var t = c.highlight.enable;
					e ? t ? (c.highlight.enable = !1, new s(".ariahighlighttool").parent().removeClass(
						"fixedSelect"), new s(".ariahighlighttool").ariaAttr("success", i.unsethighlight)) : (c
						.highlight.enable = !0, new s(".ariahighlighttool").parent().addClass("fixedSelect"),
						new s(".ariahighlighttool").ariaAttr("success", i.sethighlight)) : t && new s(
						".ariahighlighttool").parent().addClass("fixedSelect")
				}

				function K(e) {
					var t = c.mouseten;
					e && (c.mouseten = t = !t, A(), t ? f.play(i.ariamousetenopen) : f.play(i.ariamousetenclose)),
						t ? g.startMouseTen() : g.endMouseTen()
				}

				function _(e) {
					var t = new s(".ariamouseb"),
						n = c.mousemode;
					e ? ("ariamouseb" != n ? (c.mousemode = "ariamouseb", f.play(i.ariamousebopen)) : (t
							.removeClass("fixedSelect"), c.mousemode = null, f.play(i.ariamousebclose)), n = c
						.mousemode, A()) : "ariamouseb" == n && t.addClass("fixedSelect"), I(n)
				}

				function I(e) {
					e ? "ariamouseb" == e && g.startBigMouse() : g.endBigMouse()
				}

				function M(e) {
					var t;
					c.voice.enable ? (t = c.voice.rate, e && (t >= c.voice.maxRate ? t = c.voice.minRate : t += .5,
						c.voice.rate = parseFloat(t.toFixed(1)), f.play(i.ariaCurVoiceRate.replace("{0}", t
							.toFixed(1)))), e = new s(".ariaVoiceRate"), t <= 1 ? (e.removeClass(
						"ariaicon-quick_read"), e.addClass("ariaicon-slow_read")) : (e.addClass(
						"ariaicon-quick_read"), e.removeClass("ariaicon-slow_read")), L()) : f.play(i
						.ariaVoiceUnEnable)
				}

				function D() {
					var e = c.scale;
					e >= c.maxZoom ? f.play(i.maxZoomPage) : (e ? e += .1 : e = 1, c.scale = parseFloat(e.toFixed(
						1)), f.play(i.curZoomPage.replace("{0}", e.toFixed(1))), h.setBodyTran())
				}

				function H() {
					var e = c.scale;
					e <= c.minZoom ? f.play(i.minZoomPage) : (e ? (e -= .1, c.scale = parseFloat(e.toFixed(2))) :
						e = 1, f.play(i.curZoomPage.replace("{0}", e.toFixed(2))), h.setBodyTran())
				}

				function z(e) {
					var t, n = c.Themes,
						r = c.defaultTheme;
					if (e) {
						if (r) {
							for (var o = 0; o < n.length; o++)
								if (n[o].name == r) {
									o == n.length - 1 ? c.defaultTheme = n[0].name : c.defaultTheme = n[o + 1].name;
									break
								}
						} else c.defaultTheme = n[0].name;
						I(c.mousemode), g.setSettingTheme(), f.play(i.ariathemebtn + (c.Theme && c.Theme
							.displayName ? c.Theme.displayName : "无")), new s(".ariathemebtn").attr("title", i
							.ariathemebtn + (c.Theme && c.Theme.displayName ? c.Theme.displayName : "无"))
					}
					if (r = c.defaultTheme, n && 0 < n.length) {
						for (var a, o = 0; o < n.length; o++)
							if (n[o].name == r) {
								t = o + 1 < n.length ? n[o + 1] : n[0];
								break
							} t ? (a = t.value.color || "black", e = t.value.backgroundColor || "white", l.addCss(
							"#ariaToptoolbar .ariathemebtn", {
								color: a + " !important",
								"background-color": e + " !important"
							}, "ariathemebtn")) : new s("[title='ariathemebtn']").remove()
					}
				}

				function F(e) {
					var t = c.voice.enable,
						n = new s(".ariavoice");
					e && ((c.voice.enable = t = !t) ? f.play(i.openvoice) : (f.play(i.closevoice), f.stop()), N()),
						t ? (n.removeClass("ariaicon-close_sound"), n.addClass("ariaicon-open_sound")) : (n
							.removeClass("ariaicon-open_sound"), n.addClass("ariaicon-close_sound"))
				}

				function B(e) {
					var t, n = c.bigsrc;
					e && (c.bigsrc = !n, n = c.bigsrc, e = c.bigsrc ? i.ariabigsrcopen : i.ariabigsrcclose, new s(
						".ariabigsrc").attr("title", e), f.play(e)), n ? (new s(document.body).css(
							"margin-bottom") < 150 && new s(document.body).addClass("ariabodybottomfiexed"),
						new s("#accscreen").addClass("expanded"), new s(".ariabigsrc").addClass("fixedSelect"),
						t = new s("div,footer"), l.each(t, function(e, t) {
							var n = new s(t),
								t = n.css("bottom");
							"fixed" == n.css("position") && !n.aria.skipall && t < 99 && (n.css("bottom",
								t + 150), n.addClass("fixedbottom100"))
						})) : (new s(".ariabigsrc").removeClass("fixedSelect"), new s(document.body)
						.removeClass("ariabodybottomfiexed"), new s("#accscreen").removeClass("expanded"), t =
						new s(".fixedbottom100"), l.each(t, function(e, t) {
							var n = new s(t),
								t = n.css("bottom");
							n.css("bottom", t - 150)
						}), new s(".fixedbottom100").removeClass("fixedbottom100"))
				}

				function P() {
					new s(".ariabodytopfiexed").removeClass("ariabodytopfiexed");
					new s(".fiexdTop100");
					new s(".fiexdToabsolute").css("positon", "absolute"), new s(".fiexdToabsolute").removeClass(
						"fiexdToabsolute"), new s(".fiexdTop100").removeClass("fiexdTop100"), new s(
						"#ariaToptoolbar").removeClass("expanded")
				}

				function q(e) {
					var t = c.topfixed;
					e && (c.topfixed = t = !t);
					var n = new s(".ariatopfixed");
					t ? (new s(document.body).addClass("ariabodytopfiexed"), t = new s("div,header"), l.each(t,
						function(e, t) {
							new s(t).css("top")
						}), e && f.play(i.ariatopfixedtextopen), n.addClass("fixedSelect"), new s(
						"#ariaToptoolbar").addClass("expanded")) : (n.removeClass("fixedSelect"), P(), e && f
						.play(i.ariatopfixedtextclose))
				}

				function U(e) {
					new s("#ariaToptoolbar").removeClass("showpannel")
				}
				c.hostEnable && (u.registerEvent(d.globalListen, function(e) {
					var t = a.eventKeyCode(e);
					c.status && 49 <= t && t <= 54 && e.altKey ? function(e) {
							var t, n, r, o = new s("[aria-regiontype='" + e + "']");
							new s(".readsrc").removeClass("select"), 0 != o.length ? (t = new s(
								".currentRegion" + e), (t = 0 == t.length ? o.nodeList[0] : (r =
								t.index(o)) == o.length - 1 ? o.nodeList[0] : o.nodeList[r +
								1]) && (o = new s(t), new s(".currentRegion" + e).removeClass(
									"currentRegion" + e), o.addClass("currentRegion" + e), o
								.attr("tabindex", 0), (n = new s(".acccross" + e)).addClass(
									"select"), setTimeout(function() {
									n.removeClass("select")
								}, 500), null != (r = o.aria.owns) && 0 < new s(r).length && (
									new s(r).click(), l.triggerEvent(new s(r).firstNode,
										"mouseover")), p.setClass(o), t.focus())) : f.play(i
								.noregiontype.replace("{0}", i["regiontype" + e]))
						}(t - 48) : a.checkKeyCode(e, a.keyCodeSettings.readtype) ? R(e) : a
						.checkKeyCode(e, a.keyCodeSettings.readsrc) ? C(e) : a.checkKeyCode(e, a
							.keyCodeSettings.help) ? v() : a.checkKeyCode(e, a.keyCodeSettings
							.wakupConfig) ? q(e) : a.checkKeyCode(e, a.keyCodeSettings.opVoice) ? F(e) :
						a.checkKeyCode(e, a.keyCodeSettings.vocierate) ? M(e) : a.checkKeyCode(e, a
							.keyCodeSettings.changeTheme) ? z(e) : a.checkKeyCode(e, a.keyCodeSettings
							.fontTob) ? D() : a.checkKeyCode(e, a.keyCodeSettings.fontTos) ? H() : a
						.checkKeyCode(e, a.keyCodeSettings.mouseb) ? _(e) : a.checkKeyCode(e, a
							.keyCodeSettings.mouseten) ? K(e) : a.checkKeyCode(e, a.keyCodeSettings
							.reset) ? S() : a.checkKeyCode(e, a.keyCodeSettings.bigsrc) ? B(e) : a
						.checkKeyCode(e, a.keyCodeSettings.exitservice) && O()
				}, 1), u.registerEvent(d.TouchWakeup, function(e) {
					new s("#ariaToptoolbar").addClass("showpannel")
				}, 0)), e.exports = {
					start: function() {
						b.start(), i = i || c.Language, m.enable && void 0 !== c.road && (c.inFrame || 0 <
							new s("#ariaToptoolbar").length || o.getText(c.road +
								"html/toolbar.min.html",
								function(e) {
									0 == new s("#ariaiconstyle").length && new s(document.head).append(
											'<link rel="stylesheet" id="ariaiconstyle" href="' + c
											.road + 'css/font.min.css"></link>'), e = l.replaceAll(e,
											"{road}", c.road), new s(document.body).append(e), T(),
										new s(document.body).on("click", ".ariavoice", F), new s(
											document.body).on("click", ".ariatopfixed", q), new s(
											document.body).on("click", ".ariathemebtn", z), new s(
											document.body).on("click", ".ariazoomb", D), new s(document
											.body).on("click", ".ariazooms", H), new s(document.body)
										.on("click", ".ariareset", S), new s(document.body).on("click",
											".ariaVoiceRate", M), new s(document.body).on("click",
											".ariaReadtype", R), new s(document.body).on("click",
											".ariamouseb", _), new s(document.body).on("click",
											".ariamouseten", K), new s(document.body).on("click",
											".ariahighlighttool", j), new s(document.body).on("click",
											".ariaexit", O), new s(document.body).on("click",
											".ariabigsrc", B), new s(document.body).on("click",
											".ariablackgroud", U), new s(document.body).on("click",
											"#accscreen-py", y), new s(document.body).on("click",
											"#accscreen-jt", w), new s(document.body).on("click",
											".ariaacchelpbook", v), new s(document.body).on("click",
											".ariaReadScreen", C)
								}))
					},
					end: x
				}
			},
			2713: function(e, t, n) {
				var r = n(5602),
					o = n(7608),
					a = n(3827),
					i = n(8962),
					s = n(9985),
					l = n(9228),
					c = n(8057),
					u = n(6057),
					d = n(1689),
					f = n(5020),
					g = [];

				function h(e) {
					var t;
					e = e || document, o.start(e), r.start(e), a.start(e), s.start(e), e == document && (m(
						document), null == p && (p = setInterval(function() {
							i.status || null == clearInterval || (clearInterval(p), p = null), m(
								document)
						}, 2e3)), t = e, u.setSettingTheme(t), f.iframeMouse(e)), e != document && i.status
				}
				var p = null;

				function m(e) {
					for (var t = e.getElementsByTagName("iframe"), n = 0; n < t.length; n++) try {
						var r = t[n].contentWindow.document;
						[].indexOf.call(g, r) < 0 && g.push(r), "true" != r.body.getAttribute("araiaevet") && (r
							.body.setAttribute("araiaevet", !0), h(r)), m(r)
					} catch (e) {}
				}
				e.exports = {
					start: h,
					end: function() {
						a.end(), o.end(), r.end(), i.status = !1, s.end(), u.end(), m(document), l.each(g,
							function(e, t) {
								new c("body", t).attr("ariaevent", "false"), o.end(t), r.end(t), u.end(
									t), a.end(t)
							})
					},
					startBigMouse: function() {
						u.setMouseb(document), l.each(g, function(e, t) {
							u.setMouseb(t)
						})
					},
					endBigMouse: function() {
						u.removeMouseb(), l.each(g, function(e, t) {
							u.removeMouseb(t)
						})
					},
					startMouseTen: function() {
						d.start(), l.each(g, function(e, t) {
							d.start(t)
						})
					},
					endMouseTen: function() {
						d.end(), l.each(g, function(e, t) {
							d.end(t)
						})
					},
					setSettingTheme: function() {
						u.setSettingTheme(), l.each(g, function(e, t) {
							u.setSettingTheme(t)
						})
					}
				}
			},
			5602: function(e, t, n) {
				var r = n(1194),
					o = n(1151),
					a = n(7629),
					i = n(8141),
					s = n(630);
				e.exports = {
					start: function(e) {
						e = e || document, a.start(e), o.start(e), r.start(e), i.start(e), s.start(e)
					},
					end: function(e) {
						e = e || document, a.end(e), o.end(e), r.end(e), i.end(e), s.end(e)
					}
				}
			},
			7608: function(e, t, n) {
				var r = n(8962),
					o = n(6057),
					a = n(8458),
					i = n(5045),
					s = n(1282);
				e.exports = {
					start: function(e) {
						e = e || document, o.start(e), a.start(e), i.setFontSize(e), s.start(e), r.py &&
							"undefined" == typeof ariaPY && e == document && o.addPy()
					},
					end: function(e) {
						e = e || document, o.end(e)
					}
				}
			},
			8690: function(e, t, n) {
				var r, o = n(9228),
					s = n(2491),
					l = n(7156),
					c = n(1771),
					u = n(8962),
					d = n(4152);
				e.exports = function(a, i) {
					function t(e) {
						if (e && 0 < e.length) {
							e = e.split(",");
							for (var t = "", n = 0; n < e.length; n++) {
								var r = e[n];
								0 < r.length && (t += "," + r)
							}
							0 < t.length && (t = t.substring(1, t.length));
							var o = a.find(t);
							return 0 == o.length ? new i(t) : o
						}
						return null
					}

					function e(e) {
						e = t(e);
						if (!e) return "";
						var n = "";
						return o.each(e.nodeList, function(e, t) {
							n += t.value || t.textContent, n += ","
						}), n = o.reMoveHtml(n)
					}
					return r = r || u.Language, {
						get id() {
							return a.attr("id")
						},
						get canSetClass() {
							return "true" !== a.ariaAttr("skipall") && !(0 < a.closest(
								"[aria-skipall='true']").length)
						},
						set id(e) {
							a.attr("id", e)
						},
						get isregion() {
							return "true" === a.ariaAttr("region") || !1
						},
						get region() {
							return a.ariaAttr("region")
						},
						set region(e) {
							a.ariaAttr("region", e)
						},
						get regions() {
							return new i("[aria-region='true']")
						},
						get regionN() {
							var e = a.aria.regionElem,
								t = a.aria.regions;
							if (!e) return t.firstNode;
							e = e.index(t.nodeList);
							return e < t.length - 1 ? t[e + 1] : null
						},
						get regionP() {
							var e = a.aria.regionElem,
								t = a.aria.regions;
							if (!e) return t.firstNode;
							e = e.index(t.nodeList);
							return 0 < e ? t[e - 1] : null
						},
						get regionElem() {
							return "true" == a.ariaAttr("region") ? a : new i(a.closest(
								"[aria-region='true']"))
						},
						get nodeName() {
							if (0 === a.length) return null;
							var e = a.firstNode.nodeName.toLowerCase();
							return -1 < [].indexOf.call(o.HtmlElemRoles.select, e) ? "select" : e
						},
						get role() {
							return c.getRole(a)
						},
						set role(e) {
							a.attr("role", e)
						},
						get roleText() {
							return c.getRoleText(a)
						},
						get mainText() {
							return s.mainText(a.aria)
						},
						get descText() {
							return s.descText(a.aria)
						},
						get orientation() {
							return a.ariaAttr("orientation")
						},
						set orientation(e) {
							a.ariaAttr("orientation", e)
						},
						get errormessage() {
							return a.ariaAttr("errormessage") || a.attr("errormessage")
						},
						set errormessage(e) {
							a.ariaAttr("errormessage", e)
						},
						get description() {
							return a.ariaAttr("description")
						},
						set description(e) {
							a.ariaAttr("description", e)
						},
						get current() {
							return a.ariaAttr("current")
						},
						set current(e) {
							a.ariaAttr("current", e)
						},
						get modal() {
							return a.ariaAttr("modal")
						},
						set modal(e) {
							a.ariaAttr("modal", e)
						},
						get pressed() {
							return a.ariaAttr("pressed")
						},
						set pressed(e) {
							a.ariaAttr("pressed", e)
						},
						get valueText() {
							return l(a)
						},
						set valueText(e) {
							a.ariaAttr("valuetext", e), a.val(e), a.text(e)
						},
						get valuenow() {
							return a.ariaAttr("valuenow") || a.val()
						},
						set valuenow(e) {
							a.ariaAttr("valuenow", e), a.val(e)
						},
						get valuemin() {
							return a.ariaAttr("valuemin") || a.attr("min")
						},
						get valueminText() {
							return this.valuemin ? r.min + this.valuemin : null
						},
						set valuemin(e) {
							a.ariaAttr("valuemin", e), a.attr("min", e)
						},
						get valuemax() {
							return a.ariaAttr("valuemax") || a.attr("max")
						},
						set valuemax(e) {
							a.ariaAttr("valuemax", e), a.attr("max", e)
						},
						get valuemaxText() {
							return this.valuemax ? r.max + this.valuemax : null
						},
						get value() {
							return a.val()
						},
						get text() {
							return a.text()
						},
						get sort() {
							return a.ariaAttr("sort") || a.attr("sort")
						},
						set sort(e) {
							a.ariaAttr("sort", e), a.attr("sort", e)
						},
						get relevant() {
							return a.ariaAttr("relevant")
						},
						set relevant(e) {
							a.ariaAttr("relevant", e)
						},
						get posinset() {
							return o.formatInt(a.ariaAttr("posinset"))
						},
						set posinset(e) {
							a.ariaAttr("posinset", e)
						},
						get owns() {
							return a.ariaAttr("owns")
						},
						set owns(e) {
							a.ariaAttr("owns", e)
						},
						get live() {
							return a.ariaAttr("live")
						},
						set live(e) {
							a.ariaAttr("live", e)
						},
						get computedName() {
							return a.attr("computedName")
						},
						get describedby() {
							return t(a.ariaAttr("describedby"))
						},
						set describedby(e) {
							a.ariaAttr("describedby", e)
						},
						get describedbyText() {
							return e(a.ariaAttr("describedby"))
						},
						get labelledbyText() {
							return e(a.ariaAttr("labelledby") || a.attr("labelled-by"))
						},
						get labelledby() {
							return a.ariaAttr("labelledby") || a.attr("labelled-by")
						},
						set labelledby(e) {
							a.ariaAttr("labelledby", e)
						},
						get labelforText() {
							var e = a.attr("id");
							if (!e || 0 === e.length) return null;
							e = new i("label[for='" + e + "']");
							return 0 < e.nodeList.length ? e.text() : null
						},
						get labelfor() {
							return a.attr("for")
						},
						set labelfor(e) {
							a.attr("for", e)
						},
						get labelWrapperText() {
							if (0 === a.nodeList.length) return null;
							var e = a.nodeList[0];
							if (!e.labels || 0 === e.labels.length) return null;
							var r = "";
							return o.each(e.labels, function(e, t) {
								var n = new i(t),
									t = n.aria.descText;
								t && (r += t), r += n.aria.valueText
							}), r
						},
						get placeholder() {
							return a.attr("placeholder")
						},
						set placeholder(e) {
							a.attr("placeholder", e)
						},
						get title() {
							return a.attr("title")
						},
						set title(e) {
							a.attr("title", e)
						},
						get alt() {
							return a.attr("alt")
						},
						set alt(e) {
							a.attr("alt", e)
						},
						get label() {
							return a.ariaAttr("label")
						},
						set label(e) {
							a.ariaAttr("label", e)
						},
						get described() {
							return a.ariaAttr("described")
						},
						set described(e) {
							a.ariaAttr("described", e)
						},
						get grabbed() {
							return a.ariaAttr("grabbed")
						},
						set grabbed(e) {
							a.ariaAttr("grabbed", e)
						},
						get flowto() {
							return t(a.ariaAttr("flowto"))
						},
						set flowto(e) {
							a.ariaAttr("flowto", e)
						},
						get dropeffect() {
							return a.ariaAttr("dropeffect")
						},
						set dropeffect(e) {
							a.ariaAttr("dropeffect", e)
						},
						get controls() {
							return t(a.ariaAttr("controls"))
						},
						get nextFocus() {
							return d.nextFocus1(a, i)
						},
						get preFocus() {
							return d.preFocus1(a, i)
						},
						get firstFocus() {
							return d.firstFocus1(a, i)
						},
						get lastFocus() {
							return d.lastFocus1(a, i)
						},
						set controls(e) {
							a.ariaAttr("controls", e)
						},
						get busy() {
							return o.strToObj(a.ariaAttr("busy"))
						},
						set busy(e) {
							a.ariaAttr("busy", e)
						},
						get autocomplete() {
							return a.ariaAttr("autocomplete")
						},
						set autocomplete(e) {
							"none" === e ? a.attr("autocomplete", "off") : a.attr("autocomplete", "on"),
								a.ariaAttr("autocomplete", e)
						},
						get atomic() {
							return o.strToObj(a.ariaAttr("atomic"))
						},
						set atomic(e) {
							a.ariaAttr("atomic", e)
						},
						get atomicElem() {
							return a.closest("[aria-atomic='true']")
						},
						get atomicText() {
							var e = "true" == a.ariaAttr("atomic") ? a : a.closest(
								"[aria-atomic='true']");
							return e ? e.textAll(!0) : null
						},
						get activedescendant() {
							return a.ariaAttr("activedescendant")
						},
						set activedescendant(e) {
							a.ariaAttr("activedescendant", e)
						},
						get hidden() {
							return o.strToObj(a.ariaAttr("hidden") || a.isHidden())
						},
						set hidden(e) {
							a.ariaAttr("hidden", e), e ? a.hidden() : a.show()
						},
						get expanded() {
							return o.strToObj(a.ariaAttr("expanded"))
						},
						set expanded(e) {
							a.ariaAttr("expanded", e), a.attr("expanded", e)
						},
						get checked() {
							return -1 < ["checkbox", "radiobox", "switch"].indexOf(a.aria.role) &&
								void 0 !== a.is("checked") ? a.is("checked") : o.strToObj(a.attr(
									"checked") || a.ariaAttr("checked"))
						},
						set checked(e) {
							e ? (a.ariaAttr("checked", e), a.attr("checked", e)) : (a.removeAttr(
								"checked"), a.removeAttr("aria-checked"))
						},
						get haspopup() {
							return o.strToObj(a.attr("haspopup") || a.ariaAttr("haspopup"))
						},
						set haspopup(e) {
							a.ariaAttr("haspopup", e), a.attr("haspopup", e)
						},
						get disabled() {
							return a.is("disabled") || o.strToObj(a.attr("disabled") || a.ariaAttr(
								"disabled"))
						},
						set disabled(e) {
							a.ariaAttr("disabled", e), a.attr("disabled", e)
						},
						get invalid() {
							return o.strToObj(a.ariaAttr("invalid"))
						},
						set invalid(e) {
							a.ariaAttr("invalid", e)
						},
						get selected() {
							return o.strToObj(a.is("selected") || a.attr("selected") || a.ariaAttr(
								"selected"))
						},
						set selected(e) {
							a.ariaAttr("selected", e), a.attr("selected", e)
						},
						get level() {
							var e, t = a.ariaAttr("level");
							return t || (e = this.nodeName, -1 < o.HtmlElemRoles.heading.indexOf(e) && (
								t = e.replace("h", ""))), o.strToObj(t)
						},
						set level(e) {
							a.ariaAttr("level", e)
						},
						get multiselectable() {
							return o.strToObj(a.ariaAttr("multiselectable"))
						},
						set multiselectable(e) {
							a.ariaAttr("multiselectable", e)
						},
						get required() {
							return o.strToObj(a.ariaAttr("required") || a.attr("required"))
						},
						set required(e) {
							a.ariaAttr("required", e), a.attr("required", e)
						},
						get readonly() {
							return a.is("readonly") || o.strToObj(a.ariaAttr("readonly") || a.attr(
								"readonly"))
						},
						set readonly(e) {
							a.ariaAttr("readonly", e), a.attr("readonly", e)
						},
						get multiLine() {
							return o.strToObj(a.ariaAttr("multiline") || a.attr("multiline"))
						},
						set multiLine(e) {
							a.ariaAttr("multiline", e), a.attr("multiline", e)
						},
						get focusable() {
							if (a.isHidden()) return !1;
							var e = a.firstNode;
							if (!e) return !1;
							if (1 == e.nodeType) {
								if ("0" == e.getAttribute("tabindex")) return !0;
								if ("INPUT" == e.tagName) {
									var t = e.getAttribute("type");
									if (!t || "hidden" != t) return !0
								}
								if ("A" == e.tagName && e.getAttribute("href") || "SELECT" == e
									.tagName || "TEXTAREA" == e.tagName || "BUTTON" == e.tagName)
								return !0
							}
							return !1
						},
						set focusable(e) {
							a.attr("tabindex", e = e || 0)
						},
						get skiptheme() {
							return "true" == a.ariaAttr("skiptheme") || 0 < a.closest(
									"[aria-skiptheme='true']").length || "true" == a.ariaAttr(
								"skipall") || 0 < a.closest("[aria-skipall='true']").length
						},
						get skipall() {
							return "true" == a.ariaAttr("skipall") || 0 < a.closest(
								"[aria-skipall='true']").length
						},
						get skipscale() {
							return "true" == a.ariaAttr("skipscale") || 0 < a.closest(
									"[aria-skipscale='true']").length || "true" == a.ariaAttr(
								"skipall") || 0 < a.closest("[aria-skipall='true']").length
						},
						get isDialog() {
							return -1 < [].indexOf.call(o.HtmlElemRoles.dialog, a.aria.role) || 0 < a
								.closest(o.arrToSizzle(o.HtmlElemRoles.dialog)).length
						},
						get dialog() {
							if (-1 < [].indexOf.call(o.HtmlElemRoles.dialog, a.aria.role)) return a;
							var e = a.closest(o.arrToSizzle(o.HtmlElemRoles.dialog));
							return 0 < e.length ? e : null
						},
						get action() {
							return a.ariaAttr("action")
						},
						get lastText() {
							return s.lastDesc(a)
						},
						get tabindex() {
							return a.attr("tabindex")
						},
						set tabindex(e) {
							null != e ? a.attr("tabindex", e) : a.removeAttr("tabindex")
						}
					}
				}
			},
			1771: function(e, t, n) {
				var r = n(9228),
					o = n(954);
				e.exports = {
					getRole: function(e) {
						if (0 !== e.nodeList.length) {
							var t = e.attr("role");
							return e.hasClass("alert") && (t = "alert"), e.hasClass("nav") && (t =
									"navigation"), e.hasClass("alertdialog") && (t = "alertdialog"), e
								.hasClass("log") && (t = "log"), e.hasClass("menu") && (t = "menu"), e
								.hasClass("menubar") && (t = "menubar"), e.hasClass("menuitem") && (t =
									"menuitem"), e.hasClass("row") && (t = "row"), e.hasClass(
								"separator") && (t = "separator"), e.hasClass("slider") && (t = "slider"), e
								.hasClass("spinbutton") && (t = "spinbutton"), e.hasClass("tab") && (t =
									"tab"), e.hasClass("tablist") && (t = "tablist"), e.hasClass(
								"tabpanel") && (t = "tabpanel"), e.hasClass("timer") && (t = "timer"), e
								.hasClass("toolbar") && (t = "toolbar"), e.hasClass("tooltip") && (t =
									"tooltip"), e.hasClass("tree") && (t = "tree"), e.hasClass(
								"treeitem") && (t = "treeitem"), t = (t = !(t = e.hasClass("button") ?
										"button" : t) || 0 === t.length ? e.firstNode.type || e.firstNode
									.nodeName.toLowerCase() : t) && -1 < [].indexOf.call(r.HtmlElemRoles
									.heading, t) ? "heading" : t
						}
					},
					getRoleText: function(e) {
						var t = e.aria.role,
							n = e.aria.nodeName;
						return e.aria.role ? (n && "textbox" === t && (t = n), n = o.settings.getText(e.aria
							.role), "heading" === t && e.aria.level && (n += e.aria.level), n) : ""
					}
				}
			},
			2491: function(e, t, n) {
				var o, a = n(9228),
					i = n(954);

				function s(e) {
					return e.labelledbyText || e.label || e.describedbyText || e.labelWrapperText || e
						.labelforText || e.placeholder || e.title || e.alt || ""
				}

				function l(e) {
					var t = "";
					return e.atomicText ? t += "," + e.atomicText : e.label || e.title || e.alt ? "" : (e
						.valueText ? t += "," + e.valueText : e.value ? t += "," + o.curvalue + e.value : e
						.text && (t += "," + e.text), e.valueminText && (t += "," + o.min + e.valueminText), e
						.valuemaxText && (t += "," + o.max + e.valuemaxText), t)
				}

				function c(e, t) {
					var n = "";
					return n = void 0 !== t ? t ? "," + o[e] : "," + o["un" + e] : n
				}

				function u(e, t) {
					var n = "";
					return n = t ? "," + o[e] : n
				}
				e.exports = {
					lastDesc: function(e) {
						var t = "",
							n = e.aria;
						if (o = o || i.settings.Language, !n || n.busy) return null;
						t += u("readonly", n.readonly), t += u("multiselectable", n.multiselectable), t +=
							u("multiLine", n.multiLine), t += u("haspopup", n.haspopup), n.multiple && (t +=
								o.multiple), n.isregion && (t += o["regiontype" + e.ariaAttr(
							"regiontype")]), n.roleText && (t += n.roleText);
						var r = s(n);
						return "" != r || !n.isregion || 0 < (e = e.find(
								"h1,h2,h3,h4,h5,h6,title,.title,title")).length && (r = e.aria.text), t +=
							"," + r, n.isregion || (t += "," + l(n), t += "," + function(e) {
								var t = "";
								t += u("disabled", e.disabled), t += c("checked", e.checked), t += c(
										"expanded", e.expanded), 0 < (t += c("selected", e.selected))
									.length && (t = o.curstatus + t);
								return t
							}(n)), n.described && (t += "," + n.described), t = a.formatStrToRead(t, !0)
					},
					descText: s,
					mainText: l
				}
			},
			998: function(e, t, n) {
				var a = n(8057),
					r = n(9228);
				e.exports = {
					getText: function(e, t) {
						return null !== t && -1 < [].indexOf.call(r.HtmlElemRoles.select, t) ? function(e) {
							var t = [];
							if ("SELECT" === e.nodeName) {
								for (var n = 0; n < e.length; n++) e.options[n].selected && t.push(e[n]
									.text);
								return 0 === t.length ? void 0 : 1 === t.length ? t[0] : t
							}
							var r = new a(e);
							if ("select" !== r.aria.nodeName && "select" === r.aria.role) {
								var o = e.getAttribute("aria-controls");
								if (o) {
									r = o.substring(0, 1);
									return [].indexOf.call(["#", "."], r) < 0 && (o = "#" + o), t =
										document.querySelector(o) ? document.querySelector(o)
										.textContent : t
								}
							}
						}(e) : e.textContent || e.value
					}
				}
			},
			4152: function(e) {
				function r(e, o) {
					return function e(t) {
						for (var n = 0; n < t.length; n++) {
							var r = t.nodeList[n];
							if ((r = new o(r)).aria.focusable && !r.aria.hidden) return r;
							if (0 < (r = new o(r.child())).length) return e(r)
						}
					}(e = "BODY" == e.firstNode.nodeName ? new o(e.child()) : e)
				}

				function o(e, o) {
					return function e(t) {
						for (var n = t.length - 1; 0 <= n; n--) {
							var r = t.nodeList[n];
							if ((r = new o(r)).aria.focusable && !r.aria.hidden) return r;
							if (0 < (r = new o(r.child())).length) return e(r)
						}
					}(e = "BODY" == e.firstNode.nodeName ? new o(e.child()) : e)
				}
				e.exports = {
					nextFocus1: function e(t, n) {
						if ("BODY" == (t = t.jTool ? t : new n(t)).firstNode.nodeName) return r(t, n);
						t = new n(t.firstNode).nextNode(), t = new n(t);
						return t && t.aria && t.aria.focusable && !t.aria.hidden ? t : e(t, n)
					},
					preFocus1: function e(t, n) {
						if ("BODY" == (t = t.jTool ? t : new n(t)).firstNode.nodeName) return o(t, n);
						t = new n(t.firstNode).preNode(), t = new n(t);
						return t && next.aria && t.aria.focusable && !t.aria.hidden ? t : e(t, n)
					},
					firstFocus1: r,
					lastFocus1: o
				}
			},
			7156: function(e, t, n) {
				var r, o = n(9228),
					a = n(954);
				e.exports = function(e) {
					var t = "";
					return r = r || a.settings.Language, -1 < [].indexOf.call(o.HtmlElemRoles.select, e.aria
							.role) ? void 0 !== (t = o.reMoveHtml(e.text())) && 0 < t.length ? r.selectedelem +
						t : r.unselectedelem : (t = e.attr("aria-valuetext") || e.html(), o.reMoveHtml(t))
				}
			},
			9489: function(e, t, n) {
				var c = n(9228),
					u = n(3655),
					n = {
						visibility: function() {
							c.each(this.nodeList, function(e, t) {
								t.style.visibility = "visible"
							})
						},
						unvisibility: function() {
							c.each(this.nodeList, function(e, t) {
								t.style.visibility = "hidden"
							})
						},
						show: function() {
							return c.each(this.nodeList, function(e, t) {
								var n = "";
								if (-1 !== t.nodeName.indexOf(["SPAN", "A", "FONT", "I"])) return t
									.style.visibility && (t.style.visibility = "visible"), t.style
									.display = "inline-block", this;
								switch (t.nodeName) {
									case "TABLE":
										n = "table";
										break;
									case "THEAD":
										n = "table-header-group";
										break;
									case "TBODY":
										n = "table-row-group";
										break;
									case "TR":
										n = "table-row";
										break;
									case "TH":
									case "TD":
										n = "table-cell";
										break;
									default:
										n = "block"
								}
								t.style.visibility && (t.style.visibility = "visible"), t.style
									.display = n
							}), this
						},
						hide: function() {
							return c.each(this.nodeList, function(e, t) {
								t.style.visibility && (t.style.visibility = "hidden"), t.style.display =
									"none"
							}), this
						},
						animate: function(e, t, n) {
							var r, o, a = this,
								i = "",
								s = "",
								l = a.nodeList[0];
							e && ("undefined" === c.type(n) && "function" === c.type(t) && (n = t, t = 0),
								"undefined" === c.type(n) && (n = c.noop), "undefined" === c.type(t) && (t =
									0), c.each(e, function(e, t) {
									i += e + ":" + c.getStyle(l, e) + ";", s += e + ":" + t + ";"
								}), r = "@keyframes jToolAnimate {from {" + i + "}to {" + s + "}}", (o =
									document.createElement("style")).className = "jTool-animate-style", o
								.type = "text/css", document.head.appendChild(o), o.textContent = o
								.textContent + r, l.style.animation = "jToolAnimate " + t / 1e3 +
								"s ease-in-out forwards", window.setTimeout(function() {
									u.css.call(a, e), l.style.animation = "", document.head.removeChild(
										o), n()
								}, t))
						}
					};
				e.exports = n
			},
			6981: function(e, t, n) {
				var o = n(9228);
				e.exports = {
					addClass: function(e) {
						return this.changeClass(e, "add")
					},
					removeClass: function(e) {
						return this.changeClass(e, "remove")
					},
					toggleClass: function(e) {
						return this.changeClass(e, "toggle")
					},
					hasClass: function(e) {
						var t = this.firstNode;
						return !!t && t.classList.contains(e)
					},
					parseClassName: function(e) {
						return e.indexOf(" ") ? e.split(" ") : [e]
					},
					changeClass: function(e, r) {
						var t = this.parseClassName(e);
						return o.each(this.nodeList, function(e, n) {
							o.each(t, function(e, t) {
								try {
									n.classList[r](t)
								} catch (e) {}
							})
						}), this
					}
				}
			},
			3655: function(e, t, n) {
				var s = n(9228),
					n = {
						css: function(e, t) {
							var o = this;
							if (0 != o.length) {
								var a = ["width", "height", "min-width", "max-width", "min-height",
									"min-height", "top", "left", "right", "bottom", "padding-top",
									"padding-right", "padding-bottom", "padding-left", "font-size",
									"margin-top", "margin-right", "margin-bottom", "margin-left",
									"border-width", "border-top-width", "border-left-width",
									"border-right-width", "border-bottom-width"
								];
								if ("string" === s.type(e) && !t && 0 !== t) return -1 !== a.indexOf(e) ?
									parseInt(s.getStyle(this.firstNode, e), 10) : s.getStyle(this.firstNode,
										e);
								if ("object" === s.type(e)) {
									var n, r = e;
									for (n in r) i(n, r[n])
								} else i(e, t);
								return this
							}

							function i(n, r) {
								n = n.replace(/[A-Z]/g, function(e) {
										return "-" + e.toLowerCase()
									}), "number" === s.type(r) && (r = r.toString() + "px"), -1 !== a.indexOf(
									n) && -1 === r.indexOf("px") && (r += "px"), s.each(o.nodeList, function(e,
										t) {
										t.style[n] = r
									})
							}
						},
						width: function(e) {
							return this.css("width", e)
						},
						height: function(e) {
							return this.css("height", e)
						}
					};
				e.exports = n
			},
			5924: function(e, t, n) {
				var o = n(9228),
					n = {
						data: function(e, t) {
							return "data-" !== (e = e.toLowerCase()).substr(0, 5) && (e = "data-" + e), this
								.attr(e, t)
						},
						removeData: function(e) {
							"data-" !== (e = e.toLowerCase()).substr(0, 5) && (e = "data-" + e), this
								.removeAttr(e)
						},
						ariaAttr: function(e, t) {
							return "aria-" !== (e = e.toLowerCase()).substr(0, 5) && (e = "aria-" + e), this
								.attr(e, t)
						},
						removeAriaAttr: function(e) {
							"aria-" !== (e = e.toLowerCase()).substr(0, 5) && (e = "aria-" + e), this
								.removeAttr(e)
						},
						attr: function(n, r) {
							if (0 !== this.nodeList.length) return void 0 === n && void 0 === r ? null :
								void 0 !== r ? (o.each(this.nodeList, function(e, t) {
									t.setAttribute(n, r)
								}), this) : this.transformValue(this.firstNode.getAttribute(n))
						},
						removeAttr: function(n) {
							void 0 !== n && o.each(this.nodeList, function(e, t) {
								t.removeAttribute(n)
							})
						},
						prop: function(n, r) {
							if (0 !== this.nodeList.length) return void 0 === n && void 0 === r ? null :
								void 0 !== r ? (o.each(this.nodeList, function(e, t) {
									t[n] = r
								}), this) : this.transformValue(this.firstNode[n])
						},
						removeProp: function(n) {
							void 0 !== n && o.each(this.nodeList, function(e, t) {
								delete t[n]
							})
						},
						val: function(e) {
							return this.prop("value", e) || null
						},
						transformValue: function(e) {
							return e = "null" === o.type(e) ? void 0 : e
						}
					};
				e.exports = n
			},
			3284: function(e, t, n) {
				var i = n(9228),
					s = n(8057),
					a = n(998),
					n = {
						append: function(e) {
							return this.html(e, "append")
						},
						prepend: function(e) {
							return this.html(e, "prepend")
						},
						before: function(e) {
							e.jTool && (e = e.nodeList[0]);
							var t = this.firstNode;
							return t.parentNode.insertBefore(e, t), this
						},
						after: function(e) {
							var n;
							(e = "string" == typeof e ? new s(e) : e).jTool && (n = this.firstNode.parentNode, i
								.each(e.nodeList, function(e, t) {
									n.appendChild(t)
								}))
						},
						text: function(n) {
							if (0 !== this.nodeList.length) return void 0 !== n ? (i.each(this.nodeList,
								function(e, t) {
									t.textContent = n
								}), this) : a.getText(this.firstNode, this.aria ? this.aria.role : this
								.nodeName.toLowerCase())
						},
						html: function(t, r) {
							if (0 !== this.nodeList.length) {
								if (void 0 === t && void 0 === r) return this.firstNode.innerHTML;
								var o, e = i.type(t);
								return t.jTool ? t = t.nodeList : "string" === e ? t = i.createDOM(t || "") :
									"number" === e ? t = i.createDOM(t.toString() || "") : "element" === e && (
										t = [t]), i.each(this.nodeList, function(e, n) {
										r ? "prepend" === r && (o = n.firstChild) : n.innerHTML = "", i
											.each(t, function(e, t) {
												(t = t.cloneNode(!0)).nodeType || (t = document
														.createTextNode(t)), o ? n.insertBefore(t, o) :
													n.appendChild(t), n.normalize()
											})
									}), this
							}
						},
						wrap: function(r, o) {
							var a;
							return i.each(this.nodeList, function(e, t) {
								a = t.parentNode;
								var n = new s(r, t.ownerDocument).get(0);
								a.insertBefore(n, t), (o ? n.querySelector(o) : n.querySelector(
									":empty")).appendChild(t)
							}), this
						},
						closest: function(e) {
							if (0 !== this.nodeList.length) {
								var t = this.firstNode.parentNode;
								if (void 0 === e) return new s(t);
								var n = document.querySelectorAll(e);
								return function e() {
									t && 0 !== n.length && 1 === t.nodeType ? -1 === [].indexOf.call(n,
										t) && (t = t.parentNode, e()) : t = null
								}(), new s(t)
							}
						},
						parent: function() {
							return this.closest()
						},
						clone: function(e) {
							return new s(this.firstNode.cloneNode(e || !1))
						},
						remove: function() {
							i.each(this.nodeList, function(e, t) {
								t.parentNode.removeChild(t)
							})
						},
						textAll: function(e) {
							if (0 !== this.nodeList.length) {
								var t = "",
									t = function r(e) {
										var e = e.childNodes,
											o = "";
										return i.each(e, function(e, t) {
											var n;
											t.childNodes && 0 < t.childNodes.length ? (n = (n = t
													.getAttribute("role") || t.nodeName)
												.toLowerCase(), -1 < [].indexOf.call(i.HtmlElemRoles
													.select, n) ? o += "," + a.getText(t, n) : o +=
												"," + r(t)) : (t = function(e) {
												var t = e.nodeType;
												if (1 == t && "checkbox" == e.type && "on" == e
													.value) return "";
												var n = "";
												switch (t) {
													case 1:
														n = e.textContent || e.value;
														break;
													case 3:
														n = e.nodeValue.trim()
												}
												return n
											}(t)) && (o += "," + t)
										}), o
									}(this.firstNode);
								return t = e ? i.formatStrToRead(t, e) : t
							}
						}
					};
				e.exports = n
			},
			3873: function(e, t, n) {
				var a = n(8057),
					s = n(9228),
					n = {
						focus: function() {
							this.jTool && this.firstNode && this.firstNode.focus()
						},
						blur: function() {
							this.jTool && this.firstNode && this.firstNode.blur()
						},
						next: function() {
							if (0 != this.length) {
								var e, t = this.firstNode;
								return null != (e = t.nextElementSibling) ? -1 < [].indexOf.call(["HEAD",
										"STYLE", "SCRIPT"
									], e.nodeName) ? new a(e).next() : 1 === e.nodeType ? e : void 0 : null == t
									.parentNode && t.defaultView && t.defaultView.frameElement ? new a(t
										.defaultView.frameElement).next() : null != t.parentNode ? new a(t
										.parentNode).next() : void 0
							}
						},
						pre: function() {
							if (0 != this.length) {
								var e, t = this.firstNode;
								return null != (e = t.previousElementSibling) ? -1 < [].indexOf.call(["HEAD",
										"STYLE", "SCRIPT"
									], e.nodeName) ? new a(e).pre() : 1 === e.nodeType ? e : void 0 : null == t
									.parentNode && t.defaultView && t.defaultView.frameElement ? new a(t
										.defaultView.frameElement).pre() : null != t.parentNode ? new a(t
										.parentNode).pre() : void 0
							}
						},
						nextAll: function() {
							if (0 != this.length) {
								for (var e = this.firstNode, t = next(e), n = []; null != t;) n.push(t), t =
									next(t);
								return n
							}
						},
						preAll: function() {
							if (0 != this.length) {
								for (var e = this.firstNode, t = pre(e), n = []; null != t;) n.push(t), t = pre(
									t);
								return n
							}
						},
						get: function(e) {
							return this.nodeList[e]
						},
						is: function(e) {
							if (e && 0 !== this.length) return 0 === e.indexOf(":") && (e = e.subStr(1, e
								.length)), this.firstNode[e]
						},
						eq: function(e) {
							return new a(this.nodeList[e])
						},
						first: function() {
							return this.firstNode
						},
						last: function() {
							return this.nodeList[this.nodeList.length - 1]
						},
						child: function() {
							var e = this.firstNode.childNodes,
								n = [];
							return s.each(e, function(e, t) {
								1 === t.nodeType && n.push(t)
							}), n
						},
						find: function(r) {
							if (r instanceof HTMLElement) {
								var o, e = r.getAttribute("id");
								return e ? new a(e, this) : (function n(e) {
									s.each(e, function(e, t) {
										t == r ? o = new a(r) : o || (t = new a(t).child(), n(
											t))
									})
								}(this), o = o || new a)
							}
							return new a(r, this)
						},
						isHidden: function() {
							return "none" === this.css("display") || "hidden" === this.css("visibility") ||
								"hidden" === this.attr("type")
						},
						index: function(e) {
							var t = this.firstNode;
							return e ? e.jTool && (e = e.nodeList) : e = this.parent().child().nodeList, e ? []
								.indexOf.call(e, t) : -1
						},
						nextNode: function() {
							var e = this.next();
							if (e = e || this.parent().next()) {
								"IFRAME" == e.nodeName && (e = e.contentDocument);
								var t = new a(e).child();
								return 0 == t ? e : function e(t) {
									for (i = 0; i < t.length; i++) {
										var n = new a(t[i]).child();
										return 0 == n.length ? t[i] : e(n)
									}
								}(t)
							}
						},
						preNode: function() {
							var e = this.pre();
							if (e = e || this.parent().pre()) {
								"IFRAME" == e.nodeName && (e = e.contentDocument);
								var t = new a(e).child();
								return 0 == t ? e : function e(t) {
									for (i = t.length - 1; 0 <= i; i--) {
										var n = new a(t[i]).child();
										return 0 == n.length ? t[i] : e(n)
									}
								}(t)
							}
						}
					};
				e.exports = n
			},
			5538: function(e, t, n) {
				var l = n(9228),
					n = {
						dblclick: function(e, t, n) {
							return this.on("dblclick", e, t, n)
						},
						click: function(e, t, n) {
							return e ? this.on("click", e, t, n) : this.trigger("click")
						},
						mousemove: function(e, t, n) {
							return this.on("mousemove", e, t, n)
						},
						mousedown: function(e, t, n) {
							return this.on("mousedown", e, t, n)
						},
						touchstart: function(e, t, n) {
							return this.on("touchstart", e, t, n)
						},
						touchend: function(e, t, n) {
							return this.on("touchend", e, t, n)
						},
						touchmove: function(e, t, n) {
							return this.on("touchmove", e, t, n)
						},
						change: function(e, t, n) {
							return this.on("change", e, t, n)
						},
						on: function(e, t, n, r) {
							return this.addEvent(this.getEventObject(e, t, n, r))
						},
						off: function(e, t) {
							return this.removeEvent(this.getEventObject(e, t))
						},
						bind: function(e, t, n) {
							return this.on(e, void 0, t, n)
						},
						unbind: function(e) {
							return this.removeEvent(this.getEventObject(e))
						},
						trigger: function(r) {
							return l.each(this.nodeList, function(e, t) {
								try {
									var n;
									t.qToolEvent && t.qToolEvent[r] && 0 < t.qToolEvent[r].length ? (n =
											new Event(r), t.dispatchEvent(n)) : "click" !== r ||
										"click" === r && t[r]()
								} catch (e) {}
							}), this
						},
						getEventObject: function(e, n, r, o) {
							if ("function" == typeof n && (o = r || !1, r = n, n = void 0), !e) return this;
							var a;
							"" !== (n = !n || "element" !== l.type(this.firstNode) ? "" : n) && (a = r, r =
								function(e) {
									for (var t = e.target; t && t !== this;) {
										if (-1 !== [].indexOf.call(this.querySelectorAll(n), t)) {
											a.apply(t, arguments);
											break
										}
										t = t.parentNode
									}
								});
							var i, e = e.split(" "),
								s = [];
							return l.each(e, function(e, t) {
								return "" === t.trim() || (i = t.split("."), i = {
									eventName: t + n,
									type: i[0],
									querySelector: n,
									callback: r || l.noop,
									useCapture: o || !1,
									nameScope: i[1] || void 0
								}, void s.push(i))
							}), s
						},
						addEvent: function(e) {
							var t = this;
							return l.each(e, function(e, n) {
								l.each(t.nodeList, function(e, t) {
									t.qToolEvent = t.qToolEvent || {}, t.qToolEvent[n
										.eventName] = t.qToolEvent[n.eventName] || [], t
										.qToolEvent[n.eventName].push(n), l.addEventListener(t,
											n.type, n.callback, n.useCapture)
								})
							}), t
						},
						removeEvent: function(e) {
							var r, n = this;
							return l.each(e, function(e, t) {
								l.each(n.nodeList, function(e, n) {
									n.qToolEvent && (r = n.qToolEvent[t.eventName]) && (l.each(
										r,
										function(e, t) {
											n.removeEventListener(t.type, t.callback)
										}), delete n.qToolEvent[t.eventName])
								})
							}), n
						}
					};
				e.exports = n
			},
			3068: function(e, t, n) {
				var r = n(9228);
				e.exports = {
					offset: function() {
						var e = {
								top: 0,
								left: 0
							},
							t = this.firstNode;
						if (!t.getClientRects().length) return e;
						if ("none" === r.getStyle(t, "display")) return e;
						e = t.getBoundingClientRect(), t = t.ownerDocument.documentElement;
						return {
							top: e.top + window.pageYOffset - t.clientTop,
							left: e.left + window.pageXOffset - t.clientLeft
						}
					},
					scrollTop: function(e) {
						return this.scrollFN(e, "top")
					},
					scrollLeft: function(e) {
						return this.scrollFN(e, "left")
					},
					scrollFN: function(e, t) {
						var n = this.firstNode;
						return e || 0 === e ? (this.setScrollFN(n, t, e), this) : this.getScrollFN(n, t)
					},
					getScrollFN: function(e, t) {
						return r.isWindow(e) ? "top" === t ? e.pageYOffset : e.pageXOffset : 9 === e
							.nodeType ? "top" === t ? e.body.scrollTop : e.body.scrollLeft : 1 === e
							.nodeType ? "top" === t ? e.scrollTop : e.scrollLeft : void 0
					},
					setScrollFN: function(e, t, n) {
						return r.isWindow(e) ? "top" === t ? e.document.body.scrollTop = n : e.document.body
							.scrollLeft = n : 9 === e.nodeType ? "top" === t ? e.body.scrollTop = n : e.body
							.scrollLeft = n : 1 === e.nodeType ? "top" === t ? e.scrollTop = n : e
							.scrollLeft = n : void 0
					}
				}
			},
			8057: function(e, t, n) {
				var o = n(8690),
					a = n(9228),
					i = n(2392),
					n = function e(n, t) {
						var r;
						if (n)
							if (a.isWindow(n)) r = [n], t = void 0;
							else if (n === document) r = [document], t = void 0;
						else if (n instanceof HTMLElement) r = [n], t = void 0;
						else if (n instanceof NodeList || n instanceof Array) r = n, t = void 0;
						else if (n.jTool) r = n.nodeList, t = void 0;
						else if (/<.+>/.test(n)) r = a.createDOM(n), t = void 0;
						else {
							if (t) "string" == typeof t ? t = document.querySelectorAll(t) :
								t instanceof HTMLElement ? t = [t] : t instanceof NodeList || (t.jTool ? t = t
									.nodeList : "document" == a.type(t) || (t = void 0));
							else try {
								r = document.querySelectorAll(n)
							} catch (e) {
								r = [n], t = void 0
							}
							if (t)
								if (r = [], "document" == a.type(t)) try {
									r = t.querySelectorAll(n)
								} catch (e) {} else a.each(t, function(e, t) {
									a.each(t.querySelectorAll(n), function(e, t) {
										t && r.push(t)
									})
								})
						} else n = null;
						return r && 0 !== r.length || (r = []), this.jTool = !0, this.context = t || document, this
							.nodeList = r, this.length = this.nodeList ? this.nodeList.length : 0, this
							.querySelector = n, e.prototype.extend = i, e.prototype.extend(r), 0 < this.length ? (
								this.aria = o(this, e), this.firstNode = this.nodeList[0]) : (this.aria = null, this
								.firstNode = null), this
					};
				e.exports = n
			},
			9724: function(e) {
				function o(e) {
					return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol
							.prototype ? "symbol" : typeof e
					})(e)
				}

				function a(e) {
					if (null === e) return "null";
					if (e != e) return "nan";
					if ("function" == typeof Array.isArray) {
						if (Array.isArray(e)) return "array"
					} else if ("[object Array]" === Object.prototype.toString.call(e)) return "array";
					return o(e).toLowerCase()
				}

				function t() {
					this.name = "Store"
				}
				t.prototype = {
					init: function(e) {
						return this.store = window[e], this
					},
					set: function(e, t) {
						if (null != (e = "object" === o(e) ? e.root : e)) {
							var n = e.split("/"),
								r = (r = this.get(n[0])) || {};
							switch (a(r = 1 < n.length ? function e(t, n, r, o) {
								return (t = t || {})[n[o]] || (t[n[o]] = {}), o >= n.length - 1 ?
									void 0 === r ? delete t[n[o]] : t[n[o]] = r : e(t[n[o]], n, r,
										o + 1), t
							}(r, n, t, 1) : r)) {
								case "object":
								case "array":
									this.store.setItem(n[0], JSON.stringify(r));
									break;
								default:
									this.store.setItem(n[0], r)
							}
						}
					},
					get: function(e) {
						e = e.split("/");
						return function e(t, n, r) {
							if (null === t) return null;
							try {
								t = "number" === a(+t) ? t : JSON.parse(t)
							} catch (e) {}
							return 1 === n.length ? t : ("object" === o(t) && (t = t[n[r]]), (r += 1) >
								n.length - 1 ? t : e(t, n, r))
						}(this.store.getItem(e[0]), e, 1)
					},
					getAll: function() {
						var e, t = JSON.parse(JSON.stringify(this.store)),
							n = {},
							r = "";
						for (e in t) {
							try {
								r = "number" === a(+(r = t[e])) ? r : JSON.parse(r)
							} catch (e) {}
							n[e] = r
						}
						return n
					},
					remove: function(e) {
						this.store.set(e, void 0)
					},
					clear: function() {
						this.store.clear()
					}
				};
				var n = (new t).init("localStorage");
				(new t).init("sessionStorage");
				e.exports = n
			},
			9438: function(e, t, n) {
				function i(e) {
					return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol
							.prototype ? "symbol" : typeof e
					})(e)
				}
				var r = n(2392),
					l = n(9228);

				function o(a) {
					var e = {
						url: null,
						type: "GET",
						data: null,
						headers: {},
						async: !0,
						xhrFields: {},
						beforeSend: l.noop,
						complete: l.noop,
						success: l.noop,
						error: l.noop
					};
					if ((a = r(e, a)).url) {
						a.data = a.data || {};
						var i = new XMLHttpRequest,
							s = new Promise(function(e, t) {
								var n, r, o = "";
								for (r in "GET" === a.type.toUpperCase() && (n = "", (o = "object" === l.type(a
										.data) ? (l.each(a.data, function(e, t) {
										void 0 !== t && ("" !== n && (n += "&"), n += e + "=" +
											t)
									}), n) : a.data) && (a.url = a.url + (-1 === a.url.indexOf("?") ? "?" :
										"&") + o), o = null), i.open(a.type, a.url, a.async), a.xhrFields) i[
									r] = a.xhrFields[r];
								"POST" === a.type.toUpperCase() && (i.setRequestHeader("Content-Type",
										"application/json;charset=utf-8"), o = JSON.stringify(a.data)), a
									.beforeSend(i), i.responseType || (i.responseType = "json"), i.send(o), a
									.async ? (i.onload = function() {
										200 === i.status ? (s.done && "function" == typeof s.done && s.done(
													i.responseJSON || i.response || i.responseText), a
												.success && a.success(i.response, i.status), e &&
												"function" == typeof e && e(i.response || i.responseText)) :
											t && "function" == typeof t && t(i, i.status)
									}, i.onerror = function() {
										a.error && a.error(i, i.status), t && "function" == typeof t && t(i,
											i.status)
									}) : 200 === i.status ? (s.done && "function" == typeof s.done && s.done(i
											.responseJSON || i.response || i.responseText), a.success && a
										.success(i.response, i.status), e(i.response || i.responseText)) : (a
										.error && a.error(i, i.status), t && "function" == typeof t && t(i, i
											.status))
							});
						return s
					}
				}
				e.exports = {
					ajax: o,
					post: function(e, t, n) {
						return o({
							url: e,
							type: "POST",
							data: t,
							success: n
						})
					},
					get: function(e, t, n) {
						return o({
							url: e,
							type: "GET",
							data: t,
							success: n
						})
					},
					getText: function(e, t) {
						return o({
							url: e,
							type: "GET",
							headers: {
								"Content-Type": "text/html;charset:utf-8"
							},
							xhrFields: {
								responseType: "text"
							},
							success: t
						})
					},
					jsonp: function(e, r) {
						var o, a = document.createElement("script");
						return "object" === i(e) && (e = (r = e).url, delete r.url), e = e + (0 < e.indexOf(
							"?") ? "&" : "?") + function(e) {
							var t, n = [];
							for (t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
							return n.join("&")
						}(r.data), new Promise(function(t, n) {
							a.onerror = function(e) {
									return r.error && r.error(e), n("出错了")
								}, o = ("jsonp_" + Math.random()).replace(".", ""), window[o] =
								function(e) {
									return document.head.removeChild(a), r.success && r.success(e),
										t(e)
								}, a.src = e + (0 <= e.indexOf("?") ? "&" : "?") + (r.callback ||
									"callback") + "=" + o, document.head.append(a)
						})
					}
				}
			},
			2392: function(e, t, n) {
				function r(e) {
					return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol
							.prototype ? "symbol" : typeof e
					})(e)
				}
				var a = n(9228);
				e.exports = function() {
					if (0 === arguments.length) return {};
					var o = !1,
						e = 1,
						t = arguments[0];
					for (1 === arguments.length && "object" === r(arguments[0]) ? (t = this, e = 0) : 2 ===
						arguments.length && "boolean" == typeof arguments[0] ? (o = arguments[0], t = this, e =
							1) : 2 < arguments.length && "boolean" == typeof arguments[0] && (o = arguments[0],
							t = arguments[1] || {}, e = 2); e < arguments.length; e++)(function e(t, n) {
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (o &&
							"object" === a.type(t[r]) ? ("object" !== a.type(n[r]) && (n[r] = {}),
								e(t[r], n[r])) : n[r] = t[r])
					})(arguments[e] || {}, t);
					return t
				}
			},
			6413: function() {
				Array.from || (Array.from = function(e) {
					return Array.apply(this, e)
				}), "function" != typeof Object.assign && (Object.assign = function(e) {
					"use strict";
					if (null == e) throw new TypeError("Cannot convert undefined or null to object");
					e = Object(e);
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						if (null != n)
							for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}), "classList" in document.documentElement || Object.defineProperty(HTMLElement.prototype,
					"classList", {
						get: function() {
							var o = this;

							function e(r) {
								return function(e) {
									var t = o.className.split(/\s+/g),
										n = t.indexOf(e);
									r(t, n, e), o.className = t.join(" ")
								}
							}
							return {
								add: e(function(e, t, n) {
									~t || e.push(n)
								}),
								remove: e(function(e, t) {
									~t && e.splice(t, 1)
								}),
								toggle: e(function(e, t, n) {
									~t ? e.splice(t, 1) : e.push(n)
								}),
								contains: function(e) {
									return !!~o.className.split(/\s+/g).indexOf(e)
								},
								item: function(e) {
									return o.className.split(/\s+/g)[e] || null
								}
							}
						}
					})
			},
			1439: function(e, t, n) {
				var r = n(8057),
					o = n(2392),
					a = n(9228),
					i = n(9438),
					s = n(5538),
					l = n(3655),
					c = n(6981),
					u = n(3284),
					d = n(3068),
					f = n(3873),
					g = n(9489),
					h = n(5924),
					p = n(9724),
					n = function(e, t) {
						return new r(e, t)
					};
				r.prototype = n.prototype = {}, n.extend = n.prototype.extend = o, n.extend(a), n.extend(i), n
					.store = p, n.prototype.extend(s), n.prototype.extend(l), n.prototype.extend(c), n.prototype
					.extend(u), n.prototype.extend(d), n.prototype.extend(f), n.prototype.extend(g), n.prototype
					.extend(h), window.jTool = n, e.exports = n
			},
			9228: function(e, t, n) {
				try {
					var r = n(2702);
					window.Promise || r.polyfill(), n(6413)
				} catch (e) {}
				var o = {
					"[object String]": "string",
					"[object Boolean]": "boolean",
					"[object Undefined]": "undefined",
					"[object Number]": "number",
					"[object Object]": "object",
					"[object Error]": "error",
					"[object Function]": "function",
					"[object Date]": "date",
					"[object Array]": "array",
					"[object RegExp]": "regexp",
					"[object Null]": "null",
					"[object Arguments]": "arguments",
					"[object Window]": "window",
					"[object HTMLDocument]": "document",
					"[object NodeList]": "array",
					"[object HTMLCollection]": "array"
				};

				function i(e) {
					return o[Object.prototype.toString.call(e)] || (e instanceof Element ? "element" : "")
				}

				function a(e, t) {
					var n = i(e = e && e.jTool ? e.nodeList : e);
					if ("array" === n || "nodeList" === n || "arguments" === n)
						for (var r = Array.prototype.slice.call(e, 0, e.length), o = 0; o < r.length; o++) {
							var a = r[o];
							t.call(a, o, a)
						} else if ("object" === n)
							for (var o in e)
								if (!1 === t.call(e[o], o, e[o])) break
				}
				r = {
					getBrowserInfo: function() {
						var e, t = navigator.userAgent.toLowerCase(),
							n = "",
							r = "";
						return 0 < t.indexOf("msie") ? (n = "IE", r = "" + t.match(/msie [\d.]+;/gi)) : 0 <
							t.indexOf("trident") ? (n = "IE", r = 11) : 0 < t.indexOf("edge") ? (n = "IE",
								r = 12) : 0 < t.indexOf("firefox") ? (n = "firefox", r = "" + t.match(
								/firefox\/[\d.]+/gi)) : 0 < t.indexOf("chrome") ? (n = "chrome", r = "" + t
								.match(/chrome\/[\d.]+/gi)) : 0 < t.indexOf("safari") && t.indexOf(
							"chrome") < 0 ? (n = "safari", r = "" + t.match(/version\/[\d.]+/gi)) : 0 <= t
							.indexOf("opera") ? (n = "opera", r = "" + t.match(/version\/[\d.]+/gi)) :
							"Netscape" == navigator.appName && (r = t.split(";")[7].replace(/[ ]/g, "")
								.match(/[\d\.]/g).toString().replace(/[,]/g, ""), n = "IE"), e = (r + "")
							.replace(/[^0-9.]/gi, ""), {
								browser: n,
								version: parseInt(e)
							}
					},
					language: (navigator.browserLanguage || navigator.language).toLowerCase()
				};

				function s(e, t, n) {
					if (!e) return "";
					t = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e.replace(new RegExp(t, "g"), n)
				}
				n = {
					toJson: function(e) {
						for (var t = {}, n = (e = e || location.search.substring(1)).split("&"), r = 0; r <
							n.length; r++) {
							var o = n[r].indexOf("=");
							if (-1 !== o) {
								var a = n[r].substring(0, o),
									o = n[r].substring(o + 1),
									o = decodeURIComponent(o);
								try {
									t[a] = JSON.parse(o)
								} catch (e) {
									t[a] = o
								}
							}
						}
						return t
					},
					val: function(e, t) {
						if (t = t || location.search.substring(1), !new RegExp("(^|/?|&)" + e +
								"=([^&]*)(/s|&|$)", "i").test(t)) return "";
						try {
							return JSON.parse(RegExp.$2)
						} catch (e) {
							return RegExp.$2
						}
					}
				};

				function l(e) {
					if (e) return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.toString()).replace(
						/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
						"")).replace(/aria-[a-zA-z]+=\"(.*?)\"/gi, "")).replace(
						"  ", "")).replace("  ", "")).replace("  ", "")).replace(
						/<style\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/style>/gi, "")).replace(/ /g,
						"acaicaele")).replace(/<\/?[^>]*>|(\n|\t|\r)|(\s)/g, "")).replace(/acaicaele/g,
						" ")).trim()
				}
				e.exports = {
					addEventListener: function(e, t, n, r) {
						if (e) try {
							e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent("on" + t, n
								.bind(e))
						} catch (e) {}
					},
					removeEventListener: function(e, t, n) {
						e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent("on" + t, n
							.bind(e))
					},
					isWindow: function(e) {
						return null !== e && e === e.window
					},
					noop: function() {},
					type: i,
					isEmptyObject: function(e) {
						var t, n = !0;
						for (t in e) Object.prototype.hasOwnProperty.call(e, t) && (n = !1);
						return n
					},
					each: a,
					createDOM: function(e) {
						var t = document.createElement("div");
						return t.innerHTML = e, t.childNodes
					},
					getStyle: function(e, t) {
						return t ? window.getComputedStyle(e)[t] : window.getComputedStyle(e)
					},
					version: "1.3.0",
					browser: r,
					genID: function(e) {
						return e = e || 4, "aria" + Number(Math.random().toString().substr(3, e) + Date
						.now()).toString(36)
					},
					splitBylength: function(e, t) {
						for (var n = Math.ceil(e.length / t), r = [], o = 0; o < n; o++) r.push(e.substring(
							o * t, (o + 1) * t));
						return r
					},
					replaceAll: s,
					formatString: function() {
						if (arguments.length < 1) return null;
						for (var e = arguments[0], t = 1; t < arguments.length; t++) e = s(e, "{" + (t -
							1) + "}", arguments[t]);
						return e
					},
					toPascalCase: function(e) {
						return e && e.length ? 1 === e.length ? e.charAt(0).toUpperCase() : e.charAt(0)
							.toUpperCase() + e.substr(1) : e
					},
					toCamelCase: function(e) {
						return e && e.length ? 1 === e.length ? e.charAt(0).toLowerCase() : e.charAt(0)
							.toLowerCase() + e.substr(1) : e
					},
					queryString: n,
					formatBoolean: function(e) {
						return void 0 === e ? e : Boolean(e)
					},
					formatInt: function(e) {
						return void 0 === e ? 0 : parseInt(e)
					},
					reMoveHtml: l,
					formatStrToRead: function(e, t) {
						var n;
						if (e) return t && (e = s(l(e), ",,", ","), e = s(e, ",,", ",")), n = {
							lt: "<",
							gt: ">",
							nbsp: " ",
							amp: "&",
							quot: '"'
						}, e = 1 < (e = e.replace(/&(lt|gt|nbsp|amp|quot);/gi, function(e, t) {
							return n[t]
						})).length && "," === (e = "," === e.substr(0, 1) ? e.substr(1, e.length) :
							e).substr(e.length - 1, 1) ? e.substr(0, e.length - 1) : e
					},
					strToObj: function(e) {
						if (void 0 === e) return e;
						try {
							return JSON.parse(e)
						} catch (e) {
							return {}
						}
					},
					HtmlElemRoles: {
						moveoverBesides: ["div", "ul", "table", "tr", "html", "body"],
						noregion: ["option", "radiobox", "checkbox"],
						heading: ["h1", "h2", "h3", "h4", "h5", "h6", "h7"],
						textbox: ["text", "tel", "date"],
						dialog: ["alert", "alertdialog", "dialog", "confirm"],
						select: ["combobox", "select", "select-one", "select-multiple"],
						foucsable0: ["0", "region", "combobox", "select", "select-one", "select-multiple",
							"input", "textarea", "a", "button", "checkbox", "group", "heading", "log",
							"menu", "menubar", "option", "radio", "radiogroup", "row"
						],
						foucsable1: ["tablistbox", "alert", "alertdialog", "dialog", "dd", "dt", "confirm",
							"tab", "application", "grid", "gridcell", "menuitem", "menuitemcheckbox",
							"menuitemradio", "presentation", "tr", "td", "th", "li"
						]
					},
					stopBubble: function(e) {
						(e = e || window.event) && e.stopPropagation ? e.stopPropagation() : e
							.cancelBubble = !0
					},
					stopDefault: function(e) {
						return (e = e || window.event) && e.preventDefault ? e.preventDefault() : e
							.returnValue = !1, !1
					},
					arrToSizzle: function(e) {
						var n = e.toString();
						return a(e, function(e, t) {
							n += ",[role='" + t + "']"
						}), n
					},
					triggerEvent: function(e, t) {
						var n;
						document.createEvent ? ((n = document.createEvent("HTMLEvents")).initEvent(t, !0, !
							0), n.eventName = t, e.dispatchEvent(n)) : ((n = document
						.createEventObject()).eventType = t, n.eventName = t, e.fireEvent("on" + n
							.eventType, n))
					},
					addCss: function(e, t, n) {
						void 0 === n && (n = "sheet");
						var r, o = Array.from(document.styleSheets).reduce(function(e, t) {
							return t.title == n ? t : e
						}, null);
						o ? 0 < o.length && (o = o[o.length - 1]) : ((r = document.createElement("style"))
							.title = n, document.body.appendChild(r), o = document.styleSheets[document
								.styleSheets.length - 1]);
						var a, i = "";
						for (a in t) i += a.replace(/[A-Z]/g, function(e) {
							return "-" + e.toLowerCase()
						}) + ":" + ("number" == typeof t[a] ? t[a] + "px" : t[a]) + ";";
						o.addRule ? o.addRule(e, i, o.cssRules.length) : o && o.insertRule(e + "{" + i +
							"}", 0)
					},
					colorRgbToHex: function(e) {
						if (/^(rgb|RGB)/.test(e)) {
							for (var t = e.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(","), n = "#", r =
								0; r < t.length; r++) {
								var o = Number(t[r]).toString(16);
								n += o = o.length < 2 ? "0" + o : o
							}
							return n = 7 !== n.length ? e : n
						}
						if (/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)) {
							var a = e.replace(/#/, "").split("");
							if (6 === a.length) return e;
							if (3 === a.length) {
								for (var i = "#", s = 0; s < a.length; s += 1) i += a[s] + a[s];
								return i
							}
						}
						return e
					},
					colorHexToRgb: function(e) {
						if ((e = e.toLowerCase()) && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)) {
							if (4 === e.length) {
								for (var t = "#", n = 1; n < 4; n += 1) t += e.slice(n, n + 1).concat(e
									.slice(n, n + 1));
								e = t
							}
							for (var r = [], o = 1; o < 7; o += 2) r.push(parseInt("0x" + e.slice(o, o +
								2)));
							return "RGB(" + r.join(",") + ")"
						}
						return e
					},
					isMobile: function() {
						return /mobile/i.test(navigator.userAgent) || /android/i.test(navigator.userAgent)
					},
					toCssCamelCase: function(e) {
						return e.replace(/[A-Z]/g, function(e) {
							return "-" + e.toLowerCase()
						})
					},
					isIE: function() {
						return -1 < navigator.userAgent.toLowerCase().indexOf("trident")
					},
					hasScrollbar: function() {
						return document.body.scrollHeight > (window.innerHeight || document.documentElement
							.clientHeight)
					},
					getMouseOffset: function(e) {
						var t = document.documentElement.scrollTop || document.body.scrollTop;
						return {
							x: (document.documentElement.scrollLeft || document.body.scrollLeft) + e
								.clientX,
							y: t + e.clientY
						}
					},
					isElementInViewport: function(e) {
						return 0 <= (e = e.getBoundingClientRect()).top && 0 <= e.left && e.bottom <= (
							window.innerHeight || document.documentElement.clientHeight) && e.right <= (
							window.innerWidth || document.documentElement.clientWidth)
					}
				}
			},
			2702: function(e, t, re) {
				e.exports = function() {
					"use strict";

					function r(e) {
						var t = typeof e;
						return e !== null && (t === "object" || t === "function")
					}

					function l(e) {
						return typeof e === "function"
					}
					var e = void 0;
					if (Array.isArray) e = Array.isArray;
					else e = function(e) {
						return Object.prototype.toString.call(e) === "[object Array]"
					};
					var n = e,
						o = 0,
						t = void 0,
						a = void 0,
						i = function e(t, n) {
							w[o] = t;
							w[o + 1] = n;
							o += 2;
							if (o === 2)
								if (a) a(x);
								else k()
						};

					function s(e) {
						a = e
					}

					function c(e) {
						i = e
					}
					var u = typeof window !== "undefined" ? window : undefined,
						d = u || {},
						f = d.MutationObserver || d.WebKitMutationObserver,
						g = typeof self === "undefined" && typeof process !== "undefined" && {}.toString.call(
							process) === "[object process]",
						h = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" &&
						typeof MessageChannel !== "undefined";

					function p() {
						return function() {
							return process.nextTick(x)
						}
					}

					function m() {
						if (typeof t !== "undefined") return function() {
							t(x)
						};
						return y()
					}

					function b() {
						var e = 0;
						var t = new f(x);
						var n = document.createTextNode("");
						t.observe(n, {
							characterData: true
						});
						return function() {
							n.data = e = ++e % 2
						}
					}

					function v() {
						var e = new MessageChannel;
						e.port1.onmessage = x;
						return function() {
							return e.port2.postMessage(0)
						}
					}

					function y() {
						var e = setTimeout;
						return function() {
							return e(x, 1)
						}
					}
					var w = new Array(1e3);

					function x() {
						for (var e = 0; e < o; e += 2) {
							var t = w[e];
							var n = w[e + 1];
							t(n);
							w[e] = undefined;
							w[e + 1] = undefined
						}
						o = 0
					}

					function T() {
						try {
							var e = Function("return this")().require("vertx");
							t = e.runOnLoop || e.runOnContext;
							return m()
						} catch (e) {
							return y()
						}
					}
					var k = void 0;
					if (g) k = p();
					else if (f) k = b();
					else if (h) k = v();
					else if (u === undefined && "function" === "function") k = T();
					else k = y();

					function C(e, t) {
						var n = this;
						var r = new this.constructor(E);
						if (r[A] === undefined) J(r);
						var o = n._state;
						if (o) {
							var a = arguments[o - 1];
							i(function() {
								return q(o, r, a, n._result)
							})
						} else B(n, r, e, t);
						return r
					}

					function S(e) {
						var t = this;
						if (e && typeof e === "object" && e.constructor === t) return e;
						var n = new t(E);
						D(n, e);
						return n
					}
					var A = Math.random().toString(36).substring(2);

					function E() {}
					var N = void 0,
						L = 1,
						O = 2;

					function R() {
						return new TypeError("You cannot resolve a promise with itself")
					}

					function j() {
						return new TypeError("A promises callback cannot return that same promise.")
					}

					function K(e, t, n, r) {
						try {
							e.call(t, n, r)
						} catch (e) {
							return e
						}
					}

					function _(e, r, o) {
						i(function(t) {
							var n = false;
							var e = K(o, r, function(e) {
								if (n) return;
								n = true;
								if (r !== e) D(t, e);
								else z(t, e)
							}, function(e) {
								if (n) return;
								n = true;
								F(t, e)
							}, "Settle: " + (t._label || " unknown promise"));
							if (!n && e) {
								n = true;
								F(t, e)
							}
						}, e)
					}

					function I(t, e) {
						if (e._state === L) z(t, e._result);
						else if (e._state === O) F(t, e._result);
						else B(e, undefined, function(e) {
							return D(t, e)
						}, function(e) {
							return F(t, e)
						})
					}

					function M(e, t, n) {
						if (t.constructor === e.constructor && n === C && t.constructor.resolve === S) I(e, t);
						else if (n === undefined) z(e, t);
						else if (l(n)) _(e, t, n);
						else z(e, t)
					}

					function D(t, e) {
						if (t === e) F(t, R());
						else if (r(e)) {
							var n = void 0;
							try {
								n = e.then
							} catch (e) {
								F(t, e);
								return
							}
							M(t, e, n)
						} else z(t, e)
					}

					function H(e) {
						if (e._onerror) e._onerror(e._result);
						P(e)
					}

					function z(e, t) {
						if (e._state !== N) return;
						e._result = t;
						e._state = L;
						if (e._subscribers.length !== 0) i(P, e)
					}

					function F(e, t) {
						if (e._state !== N) return;
						e._state = O;
						e._result = t;
						i(H, e)
					}

					function B(e, t, n, r) {
						var o = e._subscribers;
						var a = o.length;
						e._onerror = null;
						o[a] = t;
						o[a + L] = n;
						o[a + O] = r;
						if (a === 0 && e._state) i(P, e)
					}

					function P(e) {
						var t = e._subscribers;
						var n = e._state;
						if (t.length === 0) return;
						var r = void 0,
							o = void 0,
							a = e._result;
						for (var i = 0; i < t.length; i += 3) {
							r = t[i];
							o = t[i + n];
							if (r) q(n, r, o, a);
							else o(a)
						}
						e._subscribers.length = 0
					}

					function q(e, t, n, r) {
						var o = l(n),
							a = void 0,
							i = void 0,
							s = true;
						if (o) {
							try {
								a = n(r)
							} catch (e) {
								s = false;
								i = e
							}
							if (t === a) {
								F(t, j());
								return
							}
						} else a = r;
						if (t._state !== N);
						else if (o && s) D(t, a);
						else if (s === false) F(t, i);
						else if (e === L) z(t, a);
						else if (e === O) F(t, a)
					}

					function U(n, e) {
						try {
							e(function e(t) {
								D(n, t)
							}, function e(t) {
								F(n, t)
							})
						} catch (e) {
							F(n, e)
						}
					}
					var Y = 0;

					function V() {
						return Y++
					}

					function J(e) {
						e[A] = Y++;
						e._state = undefined;
						e._result = undefined;
						e._subscribers = []
					}

					function X() {
						return new Error("Array Methods must be provided an Array")
					}
					var W = function() {
						function e(e, t) {
							this._instanceConstructor = e;
							this.promise = new e(E);
							if (!this.promise[A]) J(this.promise);
							if (n(t)) {
								this.length = t.length;
								this._remaining = t.length;
								this._result = new Array(this.length);
								if (this.length === 0) z(this.promise, this._result);
								else {
									this.length = this.length || 0;
									this._enumerate(t);
									if (this._remaining === 0) z(this.promise, this._result)
								}
							} else F(this.promise, X())
						}
						e.prototype._enumerate = function e(t) {
							for (var n = 0; this._state === N && n < t.length; n++) this._eachEntry(t[
								n], n)
						};
						e.prototype._eachEntry = function e(t, n) {
							var r = this._instanceConstructor;
							var o = r.resolve;
							if (o === S) {
								var a = void 0;
								var i = void 0;
								var s = false;
								try {
									a = t.then
								} catch (e) {
									s = true;
									i = e
								}
								if (a === C && t._state !== N) this._settledAt(t._state, n, t._result);
								else if (typeof a !== "function") {
									this._remaining--;
									this._result[n] = t
								} else if (r === te) {
									var l = new r(E);
									if (s) F(l, i);
									else M(l, t, a);
									this._willSettleAt(l, n)
								} else this._willSettleAt(new r(function(e) {
									return e(t)
								}), n)
							} else this._willSettleAt(o(t), n)
						};
						e.prototype._settledAt = function e(t, n, r) {
							var o = this.promise;
							if (o._state === N) {
								this._remaining--;
								if (t === O) F(o, r);
								else this._result[n] = r
							}
							if (this._remaining === 0) z(o, this._result)
						};
						e.prototype._willSettleAt = function e(t, n) {
							var r = this;
							B(t, undefined, function(e) {
								return r._settledAt(L, n, e)
							}, function(e) {
								return r._settledAt(O, n, e)
							})
						};
						return e
					}();

					function Z(e) {
						return new W(this, e).promise
					}

					function G(o) {
						var a = this;
						if (!n(o)) return new a(function(e, t) {
							return t(new TypeError("You must pass an array to race."))
						});
						else return new a(function(e, t) {
							var n = o.length;
							for (var r = 0; r < n; r++) a.resolve(o[r]).then(e, t)
						})
					}

					function $(e) {
						var t = this;
						var n = new t(E);
						F(n, e);
						return n
					}

					function Q() {
						throw new TypeError(
							"You must pass a resolver function as the first argument to the promise constructor"
							)
					}

					function ee() {
						throw new TypeError(
							"Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
							)
					}
					var te = function() {
						function t(e) {
							this[A] = V();
							this._result = this._state = undefined;
							this._subscribers = [];
							if (E !== e) {
								typeof e !== "function" && Q();
								this instanceof t ? U(this, e) : ee()
							}
						}
						t.prototype.catch = function e(t) {
							return this.then(null, t)
						};
						t.prototype.finally = function e(t) {
							var n = this;
							var r = n.constructor;
							if (l(t)) return n.then(function(e) {
								return r.resolve(t()).then(function() {
									return e
								})
							}, function(e) {
								return r.resolve(t()).then(function() {
									throw e
								})
							});
							return n.then(t, t)
						};
						return t
					}();

					function ne() {
						var e = void 0;
						if (typeof re.g !== "undefined") e = re.g;
						else if (typeof self !== "undefined") e = self;
						else try {
							e = Function("return this")()
						} catch (e) {
							throw new Error(
								"polyfill failed because global object is unavailable in this environment"
								)
						}
						var t = e.Promise;
						if (t) {
							var n = null;
							try {
								n = Object.prototype.toString.call(t.resolve())
							} catch (e) {}
							if (n === "[object Promise]" && !t.cast) return
						}
						e.Promise = te
					}
					return te.prototype.then = C, te.all = Z, te.race = G, te.resolve = S, te.reject = $, te
						._setScheduler = s, te._setAsap = c, te._asap = i, te.polyfill = ne, te.Promise = te
				}()
			}
		},
		r = {};

	function o(e) {
		var t = r[e];
		if (void 0 !== t) return t.exports;
		t = r[e] = {
			exports: {}
		};
		return n[e].call(t.exports, t, t.exports, o), t.exports
	}
	o.g = function() {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch (e) {
			if ("object" == typeof window) return window
		}
	}();
	o(1019)
}();
