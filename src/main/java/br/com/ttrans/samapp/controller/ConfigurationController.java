package br.com.ttrans.samapp.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.ttrans.samapp.service.DeviceService;
import br.com.ttrans.samapp.service.EstacaoService;
import br.com.ttrans.samapp.service.GaragemService;
import br.com.ttrans.samapp.service.LinhaService;
import br.com.ttrans.samapp.service.PontoControleService;
import br.com.ttrans.samapp.service.SetorService;
import br.com.ttrans.samapp.service.SistemaService;
import br.com.ttrans.samapp.service.TrechoService;

@Controller
@RequestMapping("/config")
public class ConfigurationController {

	@Autowired
	private GaragemService garagemService;
	
	@Autowired
	private SistemaService sistemaService;
	
	@Autowired
	private LinhaService linhaService;
	
	@Autowired
	private PontoControleService pontoCService;
	
	@Autowired
	private SetorService setorService;
	
	@Autowired
	private TrechoService trechoService;
	
	@Autowired
	private DeviceService deviceService;
	
	@Autowired
	private EstacaoService estacaoService;
	
	
	@RequestMapping("/load/garagem")
	@ResponseBody
	public Map<String, Object> loadGaragem() {
		
		Map<String,Object> result = new HashMap<String, Object>();
		
		result.put("data", garagemService.loadData());
		
		return result;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
