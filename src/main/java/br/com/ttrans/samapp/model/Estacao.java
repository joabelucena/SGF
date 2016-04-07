package br.com.ttrans.samapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="Estacao")
public class Estacao {
	
	@Id
	@Column(name="estacaoID")
	private String id;
	
	@Column(name="scapID")
	private String scapID;
	
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
	
	@Column(name="xpos_px")
	private int posX;
	
	@Column(name="ypos_px")
	private int posY;

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

	public int getPosX() {
		return posX;
	}

	public void setPosX(int posX) {
		this.posX = posX;
	}

	public int getPosY() {
		return posY;
	}

	public void setPosY(int posY) {
		this.posY = posY;
	}
	
}