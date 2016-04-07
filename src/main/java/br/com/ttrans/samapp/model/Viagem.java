package br.com.ttrans.samapp.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="x_viagem")
public class Viagem {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="viagemID")
	private int id;
	
	@ManyToOne
	@JoinColumn(name="intinerarioID")
	private Itinerario itinerario;
	
	@ManyToOne
	@JoinColumn(name="deviceID")
	private Device device;
	
	@Column(name="horaPartida")
	private Date horaPartida;
	
	@Column(name="statusViagem")
	private String status;
	
	@Column(name="datetimeViagem")
	private Date dtViagem;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Itinerario getItinerario() {
		return itinerario;
	}

	public void setItinerario(Itinerario itinerario) {
		this.itinerario = itinerario;
	}

	public Device getDevice() {
		return device;
	}

	public void setDevice(Device device) {
		this.device = device;
	}

	public Date getHoraPartida() {
		return horaPartida;
	}

	public void setHoraPartida(Date horaPartida) {
		this.horaPartida = horaPartida;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getDtViagem() {
		return dtViagem;
	}

	public void setDtViagem(Date dtViagem) {
		this.dtViagem = dtViagem;
	}
	
}
