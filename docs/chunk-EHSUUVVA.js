import{a as b}from"./chunk-VE7BRGH7.js";import{Aa as _,Da as u,Ea as t,Fa as e,Ga as l,Ha as A,Ia as E,Ja as v,Na as i,Oa as h,Pa as C,Qa as w,R as S,Ra as D,Y as f,Z as x,oa as c,ya as g,za as y}from"./chunk-SZ6ZLD36.js";function M(n,a){if(n&1&&i(0),n&2){let m=v();h(" ",m.systemsEngineerExp[0]," yrs ")}}function P(n,a){n&1&&i(0,"Less")}function T(n,a){n&1&&i(0,"More")}function k(n,a){n&1&&(t(0,"div",28)(1,"div",30)(2,"span"),l(3,"span",31),e()(),t(4,"div",30)(5,"span"),l(6,"span",32),e()(),t(7,"div",30)(8,"span",33),l(9,"span",34),e()()())}function B(n,a){if(n&1&&(t(0,"div",29),i(1),e()),n&2){let m=v(2);c(),w(" ",m.myAge[0]," Years ",m.myAge[1]," Months ",m.myAge[2]," Days ")}}function O(n,a){if(n&1&&g(0,k,10,0,"div",28)(1,B,2,3,"div",29),n&2){let m=v();u(m.switchAgeTab?1:0)}}var V=(()=>{let a=class a{constructor(){this.myAge=[],this.tcsExp=[],this.systemsEngineerExp=[],this.attritionDesc=!1,this.switchAgeTab=!1}ngOnInit(){this.tcsExp=this.calculateDateDifference(new Date("2021-01-21"),new Date),this.systemsEngineerExp=this.calculateDateDifference(new Date("2024-01-21"),new Date),this.myAge=this.calculateDateDifference(new Date("1999-08-03"),new Date)}calculateDateDifference(d,o){let r=o.getFullYear()-d.getFullYear(),s=o.getMonth()-d.getMonth(),p=o.getDate()-d.getDate();return p<0&&(s--,p=new Date(o.getFullYear(),o.getMonth(),0).getDate()-d.getDate()+o.getDate()),s<0&&(r--,s+=12),[r,s,p]}};a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=S({type:a,selectors:[["app-homepage-s"]],standalone:!0,features:[D],decls:106,vars:5,consts:[["age",""],[1,"container-fluid"],[1,"fs-5","mt-4","font-w-500"],[1,"my-3"],[1,"d-flex"],[1,"rounded-2","d-flex","bg-white","align-items-center","justify-content-center","org-logos"],["src","tcs_logo.png",1,"img-fluid"],[1,"ms-2"],[2,"font-weight","500"],[1,"text-small"],[1,"border-start"],[1,"ps-2","ms-1"],[1,"font-w-500"],[1,"mt-2","text-small"],[1,"d-flex","align-items-center"],[1,"opacity-25",2,"margin-left","-0.175rem"],[1,"bg-white","w-75","ms-2","opacity-25",2,"height","1px"],[1,"pt-2","ps-2","ms-1"],[1,"text-nowrap"],[1,"flex-fill"],[1,"d-flex","justify-content-between","mb-2"],["data-bs-toggle","collapse","data-bs-target","#collapseExample","aria-expanded","false","aria-controls","collapseExample",1,"text-decoration-underline","text-end","align-self-end",2,"min-width","2.55rem",3,"click"],["id","collapseExample",1,"collapse"],[1,"my-4"],[1,"fs-5","font-w-500"],["src","sppu_logo.jpg",1,"img-fluid","p-1"],[1,"border-start","mb-4"],[3,"click"],[1,"d-flex","justify-content-evenly","my-5"],[1,"d-flex","justify-content-center","align-items-center","ageTab","my-5"],[1,"meter","rounded"],[1,"rounded","progress0"],[1,"rounded","progress0","progress1"],[2,"height","50%"],[1,"rounded","progress0","progress2"]],template:function(o,r){if(o&1){let s=A();l(0,"app-navbar-s"),t(1,"div",1)(2,"div",2),i(3," Experience "),e(),t(4,"div",3)(5,"div",4)(6,"div",5),l(7,"img",6),e(),t(8,"div",7)(9,"div",8),i(10," Tata Consultancy Services "),e(),t(11,"div",9),i(12),e()()()(),t(13,"div",10)(14,"div",11)(15,"div",12),i(16,"Systems Engineer"),e(),t(17,"div",9),i(18,"Apr 2023 - Present \xA0\xB7\xA0 "),g(19,M,1,1),i(20),e(),t(21,"div",13),i(22," Working on Spring, Angular 17 I am responsible for adding new features to the site. "),e()()(),t(23,"div",14)(24,"div",15),i(25,"\u2022"),e(),l(26,"div",16),e(),t(27,"div",10)(28,"div",17)(29,"div",12),i(30,"Assistant System Engineer"),e(),t(31,"div",9),i(32,"Apr 2023 - Apr 2024 \xA0\xB7\xA0 2 yrs 2 mos"),e(),t(33,"div",13),i(34," Working on Spring, Angular 17 I am responsible for adding new features to the site. "),e()()(),t(35,"div",14)(36,"div",15),i(37,"\u2022"),e(),l(38,"div",16),e(),t(39,"div",10)(40,"div",17)(41,"div",12),i(42,"Graduate Trainee"),e(),t(43,"div",9),i(44,"Jan 2021 - Jan 2022 \xA0\xB7\xA0 1 year"),e(),t(45,"div",13)(46,"div",4)(47,"div",18),i(48,"\xB7 \xA0"),e(),t(49,"div",19)(50,"div",12),i(51,"Attrition Analysis"),e(),t(52,"div",20)(53,"div"),i(54,"Project focused on analysing and predicting the attrition time of a current employee."),e(),t(55,"div",21),E("click",function(){return f(s),x(r.attritionDesc=!r.attritionDesc)}),g(56,P,1,0)(57,T,1,0),e()(),t(58,"div",22)(59,"div"),i(60," Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger. "),e(),l(61,"hr"),e()()(),t(62,"div",4)(63,"div"),i(64,"\xB7 \xA0 "),e(),t(65,"div")(66,"div",12),i(67,"Learning and Recommendation"),e(),i(68," Project focused on analysing and predicting "),e()()()()(),l(69,"hr",23),t(70,"div",24),i(71," Education "),e(),t(72,"div",3)(73,"div",4)(74,"div",5),l(75,"img",25),e(),t(76,"div",7)(77,"div",8),i(78," Savitribai Phule Pune University "),e(),t(79,"div",9),i(80,"June 2017 - June 2022 \xA0\xB7\xA0 2 yrs 2 mos"),e()()()(),t(81,"div",10)(82,"div",11)(83,"div",12),i(84,"Master In Computer Science"),e(),t(85,"div",9),i(86,"Apr 2023 - Apr 2024 \xA0\xB7\xA0 2 yrs 2 mos"),e(),t(87,"div",9),i(88,"CGPA 9.6"),e()()(),t(89,"div",14)(90,"div",15),i(91,"\u2022"),e(),l(92,"div",16),e(),t(93,"div",26)(94,"div",17)(95,"div",12),i(96,"Bachelor In Computer Science"),e(),t(97,"div",9),i(98,"June 2017 - May 2020 \xA0\xB7\xA0 2 yrs 2 mos"),e(),t(99,"div",9),i(100,"CGPA 7.6"),e()()(),t(101,"div",27,0),E("click",function(){return f(s),x(r.switchAgeTab=!r.switchAgeTab)}),g(103,O,2,1),y(104,103),_(101),e()()}o&2&&(c(12),C("Apr 2023 - Present \xA0\xB7\xA0 ",r.tcsExp[0]," yrs ",r.tcsExp[1]," mos"),c(7),u(r.systemsEngineerExp[0]!=0?19:-1),c(),h(" ",r.systemsEngineerExp[1]," mos"),c(36),u(r.attritionDesc?56:57))},dependencies:[b],styles:[".org-logos[_ngcontent-%COMP%]{width:4.3rem;height:3rem}.ageTab[_ngcontent-%COMP%]{height:10rem}.meter[_ngcontent-%COMP%]{height:10rem;width:4px;background-color:#233547}.meter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;height:100%}.progress0[_ngcontent-%COMP%]{background-color:#fff;animation:_ngcontent-%COMP%_progressBar 6s ease-in-out;animation-fill-mode:both}.progress1[_ngcontent-%COMP%]{animation-delay:6s}.progress2[_ngcontent-%COMP%]{animation-delay:12s}@keyframes _ngcontent-%COMP%_progressBar{0%{height:0}to{height:100%}}"]});let n=a;return n})();export{V as HomepageSComponent};