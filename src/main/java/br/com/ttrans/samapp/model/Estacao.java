package br.com.ttrans.samapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(ignoreUnknown=true)
@Table(name="Estacao")
public class Estacao {
	
	@Id
	@Column(name="estacaoID")
	private String id;
	
	@Column(name="scapID")
	private String scapID;
	
	@NotFound(action=NotFoundAction.IGNORE)
	@ManyToOne
	@JoinColumn(name="geozoneID")
	private Geozone geozone;
	
	@Column(name="nome")
	private String nome;
	
	@Column(name="sigla")
	private String sigla;
	
	@Column(name="localizacaoLat")
	private Double longitude;
	
	@Column(name="localizacaoLon")
	private Double latitude;
	
	@NotFound(action=NotFoundAction.IGNORE)
	@Column(name="xpos_px")
	private Integer posX;
	
	@NotFound(action=NotFoundAction.IGNORE)
	@Column(name="ypos_px")
	private Integer posY;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getScapID() {
		return scapID;
	}

	public void setScapID(String scapID) {
		this.scapID = scapID;
	}

	public Geozone getGeozone() {
		return geozone;
	}

	public void setGeozone(Geozone geozone) {
		this.geozone = geozone;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSigla() {
		return sigla;
	}

	public void setSigla(String sigla) {
		this.sigla = sigla;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Integer getPosX() {
		return posX;
	}

	public void setPosX(Integer posX) {
		this.posX = posX;
	}

	public Integer getPosY() {
		return posY;
	}

	public void setPosY(Integer posY) {
		this.posY = posY;
	}
	
	
}
