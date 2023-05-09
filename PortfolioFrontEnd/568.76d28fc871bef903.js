"use strict";(self.webpackChunkangularproject=self.webpackChunkangularproject||[]).push([[568],{9568:(He,ee,m)=>{m.r(ee);var a=m(5861),C=m(3942),i=m(8502),c=m(2090),te=(m(6881),m(1877),m(4859));function R(){return window}function w(){return(w=(0,a.Z)(function*(n,t,e){var r;const{BuildInfo:o}=R();(0,i.as)(t.sessionId,"AuthEvent did not contain a session ID");const s=yield ue(t.sessionId),u={};return(0,i.at)()?u.ibi=o.packageName:(0,i.au)()?u.apn=o.packageName:(0,i.av)(n,"operation-not-supported-in-this-environment"),o.displayName&&(u.appDisplayName=o.displayName),u.sessionId=s,(0,i.aw)(n,e,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,u)})).apply(this,arguments)}function S(){return(S=(0,a.Z)(function*(n){const{BuildInfo:t}=R(),e={};(0,i.at)()?e.iosBundleId=t.packageName:(0,i.au)()?e.androidPackageName=t.packageName:(0,i.av)(n,"operation-not-supported-in-this-environment"),yield(0,i.ax)(n,e)})).apply(this,arguments)}function N(){return(N=(0,a.Z)(function*(n,t,e){const{cordova:r}=R();let o=()=>{};try{yield new Promise((s,u)=>{let d=null;function h(){var l;s();const I=null===(l=r.plugins.browsertab)||void 0===l?void 0:l.close;"function"==typeof I&&I(),"function"==typeof e?.close&&e.close()}function f(){d||(d=window.setTimeout(()=>{u((0,i.az)(n,"redirect-cancelled-by-user"))},2e3))}function v(){"visible"===document?.visibilityState&&f()}t.addPassiveListener(h),document.addEventListener("resume",f,!1),(0,i.au)()&&document.addEventListener("visibilitychange",v,!1),o=()=>{t.removePassiveListener(h),document.removeEventListener("resume",f,!1),document.removeEventListener("visibilitychange",v,!1),d&&window.clearTimeout(d)}})}finally{o()}})).apply(this,arguments)}function ue(n){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)(function*(n){const t=le(n),e=yield crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(e)).map(o=>o.toString(16).padStart(2,"0")).join("")})).apply(this,arguments)}function le(n){if((0,i.as)(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return(new TextEncoder).encode(n);const t=new ArrayBuffer(n.length),e=new Uint8Array(t);for(let r=0;r<n.length;r++)e[r]=n.charCodeAt(r);return e}class ce extends i.aB{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(t=>{this.resolveInialized=t})}addPassiveListener(t){this.passiveListeners.add(t)}removePassiveListener(t){this.passiveListeners.delete(t)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(t){return this.resolveInialized(),this.passiveListeners.forEach(e=>e(t)),super.onEvent(t)}initialized(){var t=this;return(0,a.Z)(function*(){yield t.initPromise})()}}function z(n){return O.apply(this,arguments)}function O(){return(O=(0,a.Z)(function*(n){const t=yield L()._get(T(n));return t&&(yield L()._remove(T(n))),t})).apply(this,arguments)}function fe(){const n=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let e=0;e<20;e++){const r=Math.floor(Math.random()*t.length);n.push(t.charAt(r))}return n.join("")}function L(){return(0,i.aC)(i.b)}function T(n){return(0,i.aD)("authEvent",n.config.apiKey,n.name)}function k(n){if(!n?.includes("?"))return{};const[t,...e]=n.split("?");return(0,c.zd)(e.join("?"))}const Ie=class ye{constructor(){this._redirectPersistence=i.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=i.aE,this._overrideRedirectResult=i.aF}_initialize(t){var e=this;return(0,a.Z)(function*(){const r=t._key();let o=e.eventManagers.get(r);return o||(o=new ce(t),e.eventManagers.set(r,o),e.attachCallbackListeners(t,o)),o})()}_openPopup(t){(0,i.av)(t,"operation-not-supported-in-this-environment")}_openRedirect(t,e,r,o){var s=this;return(0,a.Z)(function*(){!function ae(n){var t,e,r,o,s,u,d,h,f,v;const l=R();(0,i.aA)("function"==typeof(null===(t=l?.universalLinks)||void 0===t?void 0:t.subscribe),n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,i.aA)(typeof(null===(e=l?.BuildInfo)||void 0===e?void 0:e.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,i.aA)("function"==typeof(null===(s=null===(o=null===(r=l?.cordova)||void 0===r?void 0:r.plugins)||void 0===o?void 0:o.browsertab)||void 0===s?void 0:s.openUrl),n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,i.aA)("function"==typeof(null===(h=null===(d=null===(u=l?.cordova)||void 0===u?void 0:u.plugins)||void 0===d?void 0:d.browsertab)||void 0===h?void 0:h.isAvailable),n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,i.aA)("function"==typeof(null===(v=null===(f=l?.cordova)||void 0===f?void 0:f.InAppBrowser)||void 0===v?void 0:v.open),n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(t);const u=yield s._initialize(t);yield u.initialized(),u.resetRedirect(),(0,i.aG)(),yield s._originValidation(t);const d=function he(n,t,e=null){return{type:t,eventId:e,urlResponse:null,sessionId:fe(),postBody:null,tenantId:n.tenantId,error:(0,i.az)(n,"no-auth-event")}}(t,r,o);yield function ge(n,t){return L()._set(T(n),t)}(t,d);const h=yield function ie(n,t,e){return w.apply(this,arguments)}(t,d,e),f=yield function oe(n){const{cordova:t}=R();return new Promise(e=>{t.plugins.browsertab.isAvailable(r=>{let o=null;r?t.plugins.browsertab.openUrl(n):o=t.InAppBrowser.open(n,(0,i.ay)()?"_blank":"_system","location=yes"),e(o)})})}(h);return function se(n,t,e){return N.apply(this,arguments)}(t,u,f)})()}_isIframeWebStorageSupported(t,e){throw new Error("Method not implemented.")}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=function re(n){return S.apply(this,arguments)}(t)),this.originValidationPromises[e]}attachCallbackListeners(t,e){const{universalLinks:r,handleOpenURL:o,BuildInfo:s}=R(),u=setTimeout((0,a.Z)(function*(){yield z(t),e.onEvent(B())}),500),d=function(){var v=(0,a.Z)(function*(l){clearTimeout(u);const I=yield z(t);let q=null;I&&l?.url&&(q=function pe(n,t){var e,r;const o=function _e(n){const t=k(n),e=t.link?decodeURIComponent(t.link):void 0,r=k(e).link,o=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return k(o).link||o||r||e||n}(t);if(o.includes("/__/auth/callback")){const s=k(o),u=s.firebaseError?function ve(n){try{return JSON.parse(n)}catch{return null}}(decodeURIComponent(s.firebaseError)):null,d=null===(r=null===(e=u?.code)||void 0===e?void 0:e.split("auth/"))||void 0===r?void 0:r[1],h=d?(0,i.az)(d):null;return h?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:h,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:o,postBody:null}}return null}(I,l.url)),e.onEvent(q||B())});return function(I){return v.apply(this,arguments)}}();typeof r<"u"&&"function"==typeof r.subscribe&&r.subscribe(null,d);const h=o,f=`${s.packageName.toLowerCase()}://`;R().handleOpenURL=function(){var v=(0,a.Z)(function*(l){if(l.toLowerCase().startsWith(f)&&d({url:l}),"function"==typeof h)try{h(l)}catch(I){console.error(I)}});return function(l){return v.apply(this,arguments)}}()}};function B(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,i.az)("no-auth-event")}}function E(){var n;return(null===(n=self?.location)||void 0===n?void 0:n.protocol)||null}function H(n=(0,c.z$)()){return!("file:"!==E()&&"ionic:"!==E()&&"capacitor:"!==E()||!n.toLowerCase().match(/iphone|ipad|ipod|android/))}function G(){try{const n=self.localStorage,t=i.aL();if(n)return n.setItem(t,"1"),n.removeItem(t),!function Ne(n=(0,c.z$)()){return function we(){return(0,c.w1)()&&11===document?.documentMode}()||function Se(n=(0,c.z$)()){return/Edge\/\d+/.test(n)}(n)}()||(0,c.hl)()}catch{return U()&&(0,c.hl)()}return!1}function U(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function D(){return(function ke(){return"http:"===E()||"https:"===E()}()||(0,c.ru)()||H())&&!function Ce(){return(0,c.b$)()||(0,c.UG)()}()&&G()&&!U()}function Y(){return H()&&typeof document<"u"}function Z(){return(Z=(0,a.Z)(function*(){return!!Y()&&new Promise(n=>{const t=setTimeout(()=>{n(!1)},1e3);document.addEventListener("deviceready",()=>{clearTimeout(t),n(!0)})})})).apply(this,arguments)}const p={LOCAL:"local",NONE:"none",SESSION:"session"},A=i.aA,$="persistence";function W(n){return M.apply(this,arguments)}function M(){return(M=(0,a.Z)(function*(n){yield n._initializationPromise;const t=K(),e=i.aD($,n.config.apiKey,n.name);t&&t.setItem(e,n._getPersistence())})).apply(this,arguments)}function K(){var n;try{return(null===(n=function Oe(){return typeof window<"u"?window:null}())||void 0===n?void 0:n.sessionStorage)||null}catch{return null}}const Ue=i.aA;class y{constructor(){this.browserResolver=i.aC(i.k),this.cordovaResolver=i.aC(Ie),this.underlyingResolver=null,this._redirectPersistence=i.a,this._completeRedirectFn=i.aE,this._overrideRedirectResult=i.aF}_initialize(t){var e=this;return(0,a.Z)(function*(){return yield e.selectUnderlyingResolver(),e.assertedUnderlyingResolver._initialize(t)})()}_openPopup(t,e,r,o){var s=this;return(0,a.Z)(function*(){return yield s.selectUnderlyingResolver(),s.assertedUnderlyingResolver._openPopup(t,e,r,o)})()}_openRedirect(t,e,r,o){var s=this;return(0,a.Z)(function*(){return yield s.selectUnderlyingResolver(),s.assertedUnderlyingResolver._openRedirect(t,e,r,o)})()}_isIframeWebStorageSupported(t,e){this.assertedUnderlyingResolver._isIframeWebStorageSupported(t,e)}_originValidation(t){return this.assertedUnderlyingResolver._originValidation(t)}get _shouldInitProactively(){return Y()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Ue(this.underlyingResolver,"internal-error"),this.underlyingResolver}selectUnderlyingResolver(){var t=this;return(0,a.Z)(function*(){if(t.underlyingResolver)return;const e=yield function be(){return Z.apply(this,arguments)}();t.underlyingResolver=e?t.cordovaResolver:t.browserResolver})()}}function J(n){return n.unwrap()}function Ze(n){return j(n)}function j(n){const{_tokenResponse:t}=n instanceof c.ZR?n.customData:n;if(!t)return null;if(!(n instanceof c.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return i.P.credentialFromResult(n);const e=t.providerId;if(!e||e===i.p.PASSWORD)return null;let r;switch(e){case i.p.GOOGLE:r=i.V;break;case i.p.FACEBOOK:r=i.U;break;case i.p.GITHUB:r=i.W;break;case i.p.TWITTER:r=i.Z;break;default:const{oauthIdToken:o,oauthAccessToken:s,oauthTokenSecret:u,pendingToken:d,nonce:h}=t;return s||u||o||d?d?e.startsWith("saml.")?i.aO._create(e,d):i.L._fromParams({providerId:e,signInMethod:e,pendingToken:d,idToken:o,accessToken:s}):new i.X(e).credential({idToken:o,accessToken:s,rawNonce:h}):null}return n instanceof c.ZR?r.credentialFromError(n):r.credentialFromResult(n)}function g(n,t){return t.catch(e=>{throw e instanceof c.ZR&&function We(n,t){var e;const r=null===(e=t.customData)||void 0===e?void 0:e._tokenResponse;if("auth/multi-factor-auth-required"===t?.code)t.resolver=new Me(n,i.aq(n,t));else if(r){const o=j(t),s=t;o&&(s.credential=o,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}(n,e),e}).then(e=>{const o=e.user;return{operationType:e.operationType,credential:Ze(e),additionalUserInfo:i.ao(e),user:_.getOrCreate(o)}})}function x(n,t){return F.apply(this,arguments)}function F(){return(F=(0,a.Z)(function*(n,t){const e=yield t;return{verificationId:e.verificationId,confirm:r=>g(n,e.confirm(r))}})).apply(this,arguments)}class Me{constructor(t,e){this.resolver=e,this.auth=function De(n){return n.wrapped()}(t)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(t){return g(J(this.auth),this.resolver.resolveSignIn(t))}}class _{constructor(t){this._delegate=t,this.multiFactor=i.ar(t)}static getOrCreate(t){return _.USER_MAP.has(t)||_.USER_MAP.set(t,new _(t)),_.USER_MAP.get(t)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(t){return this._delegate.getIdTokenResult(t)}getIdToken(t){return this._delegate.getIdToken(t)}linkAndRetrieveDataWithCredential(t){return this.linkWithCredential(t)}linkWithCredential(t){var e=this;return(0,a.Z)(function*(){return g(e.auth,i.a0(e._delegate,t))})()}linkWithPhoneNumber(t,e){var r=this;return(0,a.Z)(function*(){return x(r.auth,i.l(r._delegate,t,e))})()}linkWithPopup(t){var e=this;return(0,a.Z)(function*(){return g(e.auth,i.d(e._delegate,t,y))})()}linkWithRedirect(t){var e=this;return(0,a.Z)(function*(){return yield W(i.aH(e.auth)),i.g(e._delegate,t,y)})()}reauthenticateAndRetrieveDataWithCredential(t){return this.reauthenticateWithCredential(t)}reauthenticateWithCredential(t){var e=this;return(0,a.Z)(function*(){return g(e.auth,i.a1(e._delegate,t))})()}reauthenticateWithPhoneNumber(t,e){return x(this.auth,i.r(this._delegate,t,e))}reauthenticateWithPopup(t){return g(this.auth,i.e(this._delegate,t,y))}reauthenticateWithRedirect(t){var e=this;return(0,a.Z)(function*(){return yield W(i.aH(e.auth)),i.h(e._delegate,t,y)})()}sendEmailVerification(t){return i.ae(this._delegate,t)}unlink(t){var e=this;return(0,a.Z)(function*(){return yield i.an(e._delegate,t),e})()}updateEmail(t){return i.aj(this._delegate,t)}updatePassword(t){return i.ak(this._delegate,t)}updatePhoneNumber(t){return i.u(this._delegate,t)}updateProfile(t){return i.ai(this._delegate,t)}verifyBeforeUpdateEmail(t,e){return i.af(this._delegate,t,e)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}_.USER_MAP=new WeakMap;const P=i.aA;let X=(()=>{class n{constructor(e,r){if(this.app=e,r.isInitialized())return this._delegate=r.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:o}=e.options;P(o,"invalid-api-key",{appName:e.name}),P(o,"invalid-api-key",{appName:e.name});const s=typeof window<"u"?y:void 0;this._delegate=r.initialize({options:{persistence:xe(o,e.name),popupRedirectResolver:s}}),this._delegate._updateErrorMap(i.D),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?_.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,r){i.I(this._delegate,e,r)}applyActionCode(e){return i.a5(this._delegate,e)}checkActionCode(e){return i.a6(this._delegate,e)}confirmPasswordReset(e,r){return i.a4(this._delegate,e,r)}createUserWithEmailAndPassword(e,r){var o=this;return(0,a.Z)(function*(){return g(o._delegate,i.a8(o._delegate,e,r))})()}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return i.ad(this._delegate,e)}isSignInWithEmailLink(e){return i.ab(this._delegate,e)}getRedirectResult(){var e=this;return(0,a.Z)(function*(){P(D(),e._delegate,"operation-not-supported-in-this-environment");const r=yield i.j(e._delegate,y);return r?g(e._delegate,Promise.resolve(r)):{credential:null,user:null}})()}addFrameworkForLogging(e){!function Re(n,t){(0,i.aH)(n)._logFramework(t)}(this._delegate,e)}onAuthStateChanged(e,r,o){const{next:s,error:u,complete:d}=Q(e,r,o);return this._delegate.onAuthStateChanged(s,u,d)}onIdTokenChanged(e,r,o){const{next:s,error:u,complete:d}=Q(e,r,o);return this._delegate.onIdTokenChanged(s,u,d)}sendSignInLinkToEmail(e,r){return i.aa(this._delegate,e,r)}sendPasswordResetEmail(e,r){return i.a3(this._delegate,e,r||void 0)}setPersistence(e){var r=this;return(0,a.Z)(function*(){let o;switch(function Le(n,t){A(Object.values(p).includes(t),n,"invalid-persistence-type"),(0,c.b$)()?A(t!==p.SESSION,n,"unsupported-persistence-type"):(0,c.UG)()?A(t===p.NONE,n,"unsupported-persistence-type"):U()?A(t===p.NONE||t===p.LOCAL&&(0,c.hl)(),n,"unsupported-persistence-type"):A(t===p.NONE||G(),n,"unsupported-persistence-type")}(r._delegate,e),e){case p.SESSION:o=i.a;break;case p.LOCAL:o=(yield i.aC(i.i)._isAvailable())?i.i:i.b;break;case p.NONE:o=i.N;break;default:return i.av("argument-error",{appName:r._delegate.name})}return r._delegate.setPersistence(o)})()}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return g(this._delegate,i._(this._delegate))}signInWithCredential(e){return g(this._delegate,i.$(this._delegate,e))}signInWithCustomToken(e){return g(this._delegate,i.a2(this._delegate,e))}signInWithEmailAndPassword(e,r){return g(this._delegate,i.a9(this._delegate,e,r))}signInWithEmailLink(e,r){return g(this._delegate,i.ac(this._delegate,e,r))}signInWithPhoneNumber(e,r){return x(this._delegate,i.s(this._delegate,e,r))}signInWithPopup(e){var r=this;return(0,a.Z)(function*(){return P(D(),r._delegate,"operation-not-supported-in-this-environment"),g(r._delegate,i.c(r._delegate,e,y))})()}signInWithRedirect(e){var r=this;return(0,a.Z)(function*(){return P(D(),r._delegate,"operation-not-supported-in-this-environment"),yield W(r._delegate),i.f(r._delegate,e,y)})()}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return i.a7(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}return n.Persistence=p,n})();function Q(n,t,e){let r=n;"function"!=typeof n&&({next:r,error:t,complete:e}=n);const o=r;return{next:u=>o(u&&_.getOrCreate(u)),error:t,complete:e}}function xe(n,t){const e=function Te(n,t){const e=K();if(!e)return[];const r=i.aD($,n,t);switch(e.getItem(r)){case p.NONE:return[i.N];case p.LOCAL:return[i.i,i.a];case p.SESSION:return[i.a];default:return[]}}(n,t);if(typeof self<"u"&&!e.includes(i.i)&&e.push(i.i),typeof window<"u")for(const r of[i.b,i.a])e.includes(r)||e.push(r);return e.includes(i.N)||e.push(i.N),e}class V{constructor(){this.providerId="phone",this._delegate=new i.P(J(C.Z.auth()))}static credential(t,e){return i.P.credential(t,e)}verifyPhoneNumber(t,e){return this._delegate.verifyPhoneNumber(t,e)}unwrap(){return this._delegate}}V.PHONE_SIGN_IN_METHOD=i.P.PHONE_SIGN_IN_METHOD,V.PROVIDER_ID=i.P.PROVIDER_ID;const Fe=i.aA;class Ve{constructor(t,e,r=C.Z.app()){var o;Fe(null===(o=r.options)||void 0===o?void 0:o.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new i.R(t,e,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}!function Be(n){n.INTERNAL.registerComponent(new te.wA("auth-compat",t=>{const e=t.getProvider("app-compat").getImmediate(),r=t.getProvider("auth");return new X(e,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:i.A.EMAIL_SIGNIN,PASSWORD_RESET:i.A.PASSWORD_RESET,RECOVER_EMAIL:i.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:i.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:i.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:i.A.VERIFY_EMAIL}},EmailAuthProvider:i.Q,FacebookAuthProvider:i.U,GithubAuthProvider:i.W,GoogleAuthProvider:i.V,OAuthProvider:i.X,SAMLAuthProvider:i.Y,PhoneAuthProvider:V,PhoneMultiFactorGenerator:i.m,RecaptchaVerifier:Ve,TwitterAuthProvider:i.Z,Auth:X,AuthCredential:i.J,Error:c.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion("@firebase/auth-compat","0.4.1")}(C.Z)}}]);