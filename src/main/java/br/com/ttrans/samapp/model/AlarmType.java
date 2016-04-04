package br.com.ttrans.samapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="Alarms_Type")
@SequenceGenerator(name="INC_ALARM_TYPE",sequenceName="GEN_ATY_ID")
@JsonIgnoreProperties(ignoreUnknown = true)
public class AlarmType {

	@Id
	@Column(name="aty_id")
	@GeneratedValue(strategy=GenerationType.AUTO, generator="INC_ALARM_TYPE")
	private int id;
	
	@Column(name="aty_description")
	private String desc;
	
	@Column(name="aty_class")
	private String cla;
	
	@Column(updatable=false, name = "usr_insert")
	private String insert;
	
	@Column(insertable=false, name = "usr_update")
	private String update;

	public AlarmType(){}
	
	public AlarmType(int id) {
		super();
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}
	public String getCla() {
		return cla;
	}
	public void setClass(String cla) {
		this.cla = cla;
	}

	public String getInsert() {
		return insert;
	}

	public void setInsert(String insert) {
		this.insert = insert;
	}

	public String getUpdate() {
		return update;
	}

	public void setUpdate(String update) {
		this.update = update;
	}
	
}
