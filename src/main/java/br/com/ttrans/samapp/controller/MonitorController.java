package br.com.ttrans.samapp.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.ttrans.samapp.model.Programacao;
import br.com.ttrans.samapp.model.Viagem;
import br.com.ttrans.samapp.service.ProgramacaoService;
import br.com.ttrans.samapp.service.ViagemService;

@Controller
@RequestMapping("/monitor")
public class MonitorController {
	
	@Autowired
	private ProgramacaoService progService;
	
	@Autowired
	private ViagemService viagemService;
	
	/*
	 * Data load methods
	 */
	@RequestMapping("/programacao/load")
	@ResponseBody
	public Map<String, Object> loadProgramacao() {
		
		Map<String,Object> result = new HashMap<String, Object>();
		
		result.put("data", progService.loadData());
		
		return result;
	}
	
	@RequestMapping("/viagem/load")
	@ResponseBody
	public Map<String, Object> loadViagem() {
		
		Map<String,Object> result = new HashMap<String, Object>();
		
		result.put("data", viagemService.loadData());
		
		return result;
	}
	
	
	/*
	 * CRUD Operations for: Programacao
	 */
	@RequestMapping("/programacao/add.action")
	@ResponseBody
	public Map<String, Object> addModel(@RequestBody Programacao payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			progService.add(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}
	
	@RequestMapping("/programacao/update.action")
	@ResponseBody
	public Map<String, Object> updateModel(@RequestBody Programacao payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			progService.edit(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}

		
		return result;
	}
	
	@RequestMapping("/programacao/delete.action")
	@ResponseBody
	public Map<String, Object> deleteModel(@RequestBody Programacao payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();
		
		try{
			progService.delete(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}
	
	/*
	 * CRUD Operations for: Viagem
	 */
	@RequestMapping("/viagem/add.action")
	@ResponseBody
	public Map<String, Object> addModel(@RequestBody Viagem payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			viagemService.add(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}
	
	@RequestMapping("/viagem/update.action")
	@ResponseBody
	public Map<String, Object> updateModel(@RequestBody Viagem payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			viagemService.edit(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}

		
		return result;
	}
	
	@RequestMapping("/viagem/delete.action")
	@ResponseBody
	public Map<String, Object> deleteModel(@RequestBody Viagem payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();
		
		try{
			viagemService.delete(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}
	
	
}
