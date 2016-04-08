package br.com.ttrans.samapp.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.ttrans.samapp.service.ProgramacaoService;
import br.com.ttrans.samapp.service.ViagemService;

@Controller
@RequestMapping("/plan")
public class PlanningController {
	
	@Autowired
	private ProgramacaoService service;
	
	@Autowired
	private ViagemService viagemService;
	
	
	@RequestMapping("/load")
	@ResponseBody
	public Map<String, Object> loadData() {
		
		Map<String,Object> result = new HashMap<String, Object>();
		
		result.put("data", service.loadData());
		
		return result;
	}
	
	@RequestMapping("/load/viagem")
	@ResponseBody
	public Map<String, Object> loadViagem() {
		
		Map<String,Object> result = new HashMap<String, Object>();
		
		result.put("data", viagemService.loadData());
		
		return result;
	}
	
	
	
}
