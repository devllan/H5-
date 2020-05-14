// JavaScript Document

String.prototype.trim = function () {
	return this.replace(/^\s\s*/,'').replace(/\s\s*$/,'');
	}
	var obj = new Object();
	/*******
	 * @功能说明：对象初始化
	 * @author Jiage
	 */
	function _Form(){
		this.url = new Object();
		this.data = new Object();
		this.res = new Object();
		this.path = "";
		this.subpageId = "_SubPage"
	    this.formId = "";
		this.fromParams = "";
		this.form = new Object();
		this.window = new Object();
		this.pageUrls = new Object();
		this.pageUrls.updateSelect = "update.html";
		this.pageUrls.createSelect = "create.html";
		this.pageUrls.detailsSelect = "details.html";
		this.pageUrls.details_listSelect = "details_list.html";
		this.pageUrls.details_dataSelect = "details_data.html";
		this.pageUrls.settingSelect = "setting.html";
		this.iconCreate = "images/detailed_addIcon.png";
		this.iconUpdate = "images/detailed_alterIcon.png";
		this.iconDetails = "images/detailed_viewIcon.png";
		this.icon = "images/detailed_addIcon.png";
		this.pageUrls.select = "select.action";
		this.pageUrls.del = "delete.action";
		this.pageUrls.create = "create.html";
		this.pageUrls.update = "update.html";
		this.pageUrls.details = "details.html";
		this.pageUrls.details_list = "details_list.html";
		this.pageUrls.details_data = "details_data.html";
		this.pageUrls.setting = "setting.html";
	}
	_Form.prototype.checkDel = function(){
		 return true;
	}
	_Form.prototype.checkUpdate = function(){
		 return true;
	}
	_Form.prototype.checkCreate = function(){
		 return true;
	}
	_Form.prototype.checkDetailse = function(){
		 return true;
	}
	_Form.prototype.select = function(formId){
		this.formId = formId;
		this.form = document.getElementById(formId);
		this.form.action = this.pageUrls.select;
		this.form.submit();
	};
	_Form.prototype.del = function(formId){
		if(this.checkDel()){
			this.formId = formId;
			this.form = document.getElementById(formId);
			this.form.action = this.pageUrls.del;
			this.form.submit();
		}
	};
	_Form.prototype.create = function(formId){
		this.formId = formId;
		this.form = document.getElementById(formId);
		if(this.checkCreate()){
			this.form.action = this.pageUrls.create;
			this.form.submit();
		}
	};
	_Form.prototype.update = function(formId){
		this.formId = formId;
		this.form = document.getElementById(formId);
		if(this.checkUpdate()){
			this.form.action = this.pageUrls.update;
			this.form.submit();
		}
	};
	_Form.prototype.details = function(formId){
		this.formId = formId;
		this.form = document.getElementById(formId);
		if(this.checkDetails()){
			this.form.action = this.pageUrls.details;
			this.form.submit();
		}
	};
	_Form.prototype.details_list = function(formId){
		this.formId = formId;
		this.form = document.getElementById(formId);
		if(this.checkDetails()){
			this.form.action = this.pageUrls.details_list;
			this.form.submit();
		}
	};
	_Form.prototype.details_data = function(formId){
		this.formId = formId;
		this.form = document.getElementById(formId);
		if(this.checkDetails()){
			this.form.action = this.pageUrls.details_data;
			this.form.submit();
		}
	};
	_Form.prototype.setting = function(formId){
		this.formId = formId;
		this.form = document.getElementById(formId);
		if(this.checkDetails()){
			this.form.action = this.pageUrls.setting;
			this.form.submit();
		}
	};
	_Form.prototype.clearForm = function(formId){
		$('#'+formId)[0].reset();
	};
	_Form.prototype.saveForm = function(formId){
	};
	_Form.prototype.showWindow = function(isSendParam,title,windowId,subpage,formId,width,height) {
		this.formId = formId;
		if(this.checkShowWindow(subpage)){
			this.pageUrl(subpage);
			this.pageIcon(subpage);
			if(isSendParam){
				this.fromParams = $("#"+this.formId).serialize();
				var str = (this.url+"?"+this.fromParams);
				this.url = str;
			}
			this.window = 
			    $.window({
				showModal: true,
				modalOpacity: 0.5,
				bookmarkable: false,
				draggable:true,
				showFooter: true,
				height: height,
				width: width,
				url:this.url,
				icon: this.icon,
				title: title
			   });
		}
	};
	_Form.prototype.alertSuccess=function(title,message){
	      this.windowSuccess = $.window({
				showModal: true,
				modalOpacity: 0.5,
				width:360,
				height:138,
				title: title,
				content: "<div class='promptBox' id='promptBox_success' style='display:none;'><div class='prompt_success'>"+message+"</div><div class='promptBtn'><input type='button' name='button' value='确定' style='margin:0 5px;width:46px; height:26px; background:url(images/promptBtn.png) no-repeat; font-size:0; border:none; color:#44b5ff; cursor:pointer; vertical-align:middle;' onclick='$.window.closeAll();'/></div></div>",
				footerContent:false,
				minimizable:false,
				maximizable:false
			});
	};
	_Form.prototype.alertFail = function(title,message){
	      this.windowFail = $.window({
				showModal: true,
				modalOpacity: 0.5,
				width:460,
				height:120,
				title: title,
				content: "<div class='promptBox' id='promptBox_fail' style='display:none;'><div class='prompt_fail'>"+message+"</div><div class='promptBtn'><input type='button' name='button' value='确定' style='margin:0 5px;width:46px; height:26px; background:url(images/promptBtn.png) no-repeat; font-size:0; border:none; color:#44b5ff; cursor:pointer; vertical-align:middle;' onclick='$.window.closeAll();'/></div></div>",
				footerContent:false,
				minimizable:false,
				maximizable:false
			});
	};
	_Form.prototype.checkShowWindow = function(subpage){
		return true;
	}
	_Form.prototype.pageUrl = function(subpage){
		if(subpage=="createSelect"){
			this.url = this.pageUrls.createSelect;
		}else if(subpage=="updateSelect"){
			this.url = this.pageUrls.updateSelect;
		}else if(subpage=="detailsSelect"){
			this.url = this.pageUrls.detailsSelect;
		}else if(subpage=="details_listSelect"){
			this.url = this.pageUrls.details_listSelect;
		}else if(subpage=="details_dataSelect"){
			this.url = this.pageUrls.details_dataSelect;
		}else if(subpage=="settingSelect"){
			this.url = this.pageUrls.settingSelect;
		}
		return this.url;
	};
	_Form.prototype.pageIcon = function(subpage){
		if(subpage=="createSelect"){
			this.icon = this.iconCreate;
		}else if(subpage=="updateSelect"){
			this.icon = this.iconUpdate;
		}else if(subpage=="detailsSelect"){
			this.icon = this.iconDetails;
		}else if(subpage=="details_listSelect"){
			this.icon = this.iconDetails;
		}else if(subpage=="details_dataSelect"){
			this.icon = this.iconDetails;
		}else if(subpage=="details_dataSelect"){
			this.icon = this.iconDetails;
		}else if(subpage=="settingSelect"){
			this.icon = this.iconDetails;
		}
		return this.icon;
	};
	_Form.prototype.ajax = function(){
		$.ajax({
		    url:this.url,
		    type:'post',
		    dataType:'text',
		    async:false,
		    data:this.data,
			   success:function(json){
				   obj =  $.evalJSON(json);
			   },
			   error:function(XMLHttpRequest, textStatus, errorThrown){
				   alert("error: "+errorThrown);
			   }
		});
	};
	_Form.prototype.getFormNodesByName = function(formId,tagName,id){
		this.formId = formId;
		obj = null;
		var tags = document.getElementById(this.formId).getElementsByTagName(tagName);
		for(var i=0;i<tags.length; i++){
			if(tags[i].id==id){
				obj = tags[i];
				break; 
			}
		}
		return obj;
	};
	_Form.prototype.isNull = function(str){
		return (str==null || str.trim().length<=0);
	};
	var _form = new _Form();
