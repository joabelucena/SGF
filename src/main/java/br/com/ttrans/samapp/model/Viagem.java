package br.com.ttrans.samapp.model;

import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
@Table(name="x_viagem")
public class Viagem {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="viagemID")
	private int id;
	
	@ManyToOne
	@JoinColumn(name="itinerarioID")
	private Itinerario itinerario;
	
	@ManyToOne
	@JoinColumn(name="deviceID")
	private Device device;
	
	@ManyToOne
	@JoinColumn(name="estOrig")
	private Estacao origem;
	
	@ManyToOne
	@JoinColumn(name="estDest")
	private Estacao destino;
	
	@OneToMany(fetch=FetchType.EAGER, orphanRemoval=true)
	@JoinColumn(name="viagemID", referencedColumnName = "viagemID")
	@Cascade({CascadeType.SAVE_UPDATE})
	private Set<LogViagem> log;
	
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
	
	public Estacao getOrigem() {
		return origem;
	}

	public void setOrigem(Estacao origem) {
		this.origem = origem;
	}

	public Estacao getDestino() {
		return destino;
	}

	public void setDestino(Estacao destino) {
		this.destino = destino;
	}

	public Set<LogViagem> getLog() {
		return log;
	}

	public void setLog(Set<LogViagem> log) {
		this.log = log;
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
