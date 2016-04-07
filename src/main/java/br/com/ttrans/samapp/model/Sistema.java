package br.com.ttrans.samapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="x_sistema")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Sistema {
	
	@Id
	@Column(name="sistemaID")
	private String id;
	
	@Column(name="descricao")
	private String desc;
	
	public Sistema(){}

	public Sistema(String id) {
		super();
		this.id = id;
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}
	
	
	
}
