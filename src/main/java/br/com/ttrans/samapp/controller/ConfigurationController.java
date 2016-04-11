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

import br.com.ttrans.samapp.model.Device;
import br.com.ttrans.samapp.model.Estacao;
import br.com.ttrans.samapp.model.Garagem;
import br.com.ttrans.samapp.model.Linha;
import br.com.ttrans.samapp.model.PontoControle;
import br.com.ttrans.samapp.model.Setor;
import br.com.ttrans.samapp.model.Sistema;
import br.com.ttrans.samapp.model.Trecho;
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
	
	
	/*
	 * Data load methods
	 */
	
	@RequestMapping("/garagem/load")
	@ResponseBody
	public Map<String, Object> loadGaragem() {
		
		Map<String,Object> result = new HashMap<String, Object>();
		
		result.put("data", garagemService.loadData());
		
		return result;
	}
	
	@RequestMapping("/sistema/load")
	@ResponseBody
	public Map<String, Object> loadSistema() {
		
		Map<String,Object> result = new HashMap<String, Object>();
		
		result.put("data", sistemaService.loadData());
		
		return result;
	}
	
	@RequestMapping("/linha/load")
	@ResponseBody
	public Map<String, Object> loadLinha() {
		
		Map<String,Object> result = new HashMap<String, Object>();
		
		result.put("data", linhaService.loadData());
		
		return result;
	}
	
	@RequestMapping("/pontoc/load")
	@ResponseBody
	public Map<String, Object> loadPontoC() {
		
		Map<String,Object> result = new HashMap<String, Object>();
		
		result.put("data", pontoCService.loadData());
		
		return result;
	}
	
	@RequestMapping("/setor/load")
	@ResponseBody
	public Map<String, Object> loadSetor() {
		
		Map<String,Object> result = new HashMap<String, Object>();
		
		result.put("data", setorService.loadData());
		
		return result;
	}
	
	@RequestMapping("/trecho/load")
	@ResponseBody
	public Map<String, Object> loadTrecho() {
		
		Map<String,Object> result = new HashMap<String, Object>();
		
		result.put("data", trechoService.loadData());
		
		return result;
	}
	
	@RequestMapping("/device/load")
	@ResponseBody
	public Map<String, Object> loadDevice() {
		
		Map<String,Object> result = new HashMap<String, Object>();
		
		result.put("data", deviceService.loadData());
		
		return result;
	}
	
	@RequestMapping("/estacao/load")
	@ResponseBody
	public Map<String, Object> loadEstacao() {
		
		Map<String,Object> result = new HashMap<String, Object>();
		
		result.put("data", estacaoService.loadData());
		
		return result;
	}
	
	
	/*
	 * CRUD Operations for: Garagem
	 */
	@RequestMapping("/garagem/add.action")
	@ResponseBody
	public Map<String, Object> addModel(@RequestBody Garagem payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			garagemService.add(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}
	
	@RequestMapping("/garagem/update.action")
	@ResponseBody
	public Map<String, Object> updateModel(@RequestBody Garagem payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			garagemService.edit(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}

		
		return result;
	}
	
	@RequestMapping("/garagem/delete.action")
	@ResponseBody
	public Map<String, Object> deleteModel(@RequestBody Garagem payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();
		
		try{
			garagemService.delete(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}
	
	
	/*
	 * CRUD Operations for: Sistema
	 */
	@RequestMapping("/sistema/add.action")
	@ResponseBody
	public Map<String, Object> addModel(@RequestBody Sistema payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			sistemaService.add(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}
	
	@RequestMapping("/sistema/update.action")
	@ResponseBody
	public Map<String, Object> updateModel(@RequestBody Sistema payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			sistemaService.edit(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}

		
		return result;
	}
	
	@RequestMapping("/sistema/delete.action")
	@ResponseBody
	public Map<String, Object> deleteModel(@RequestBody Sistema payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();
		
		try{
			sistemaService.delete(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}

	
	/*
	 * CRUD Operations for: Linha
	 */
	@RequestMapping("/linha/add.action")
	@ResponseBody
	public Map<String, Object> addModel(@RequestBody Linha payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			linhaService.add(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}
	
	@RequestMapping("/linha/update.action")
	@ResponseBody
	public Map<String, Object> updateModel(@RequestBody Linha payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			linhaService.edit(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}

		
		return result;
	}
	
	@RequestMapping("/linha/delete.action")
	@ResponseBody
	public Map<String, Object> deleteModel(@RequestBody Linha payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();
		
		try{
			linhaService.delete(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}
	
	
	/*
	 * CRUD Operations for: Ponto de Controle
	 */
	@RequestMapping("/pontoc/add.action")
	@ResponseBody
	public Map<String, Object> addModel(@RequestBody PontoControle payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			pontoCService.add(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}
	
	@RequestMapping("/pontoc/update.action")
	@ResponseBody
	public Map<String, Object> updateModel(@RequestBody PontoControle payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			pontoCService.edit(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}

		
		return result;
	}
	
	@RequestMapping("/pontoc/delete.action")
	@ResponseBody
	public Map<String, Object> deleteModel(@RequestBody PontoControle payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();
		
		try{
			pontoCService.delete(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}

	
	/*
	 * CRUD Operations for: Setor
	 */
	@RequestMapping("/setor/add.action")
	@ResponseBody
	public Map<String, Object> addModel(@RequestBody Setor payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			setorService.add(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}
	
	@RequestMapping("/setor/update.action")
	@ResponseBody
	public Map<String, Object> updateModel(@RequestBody Setor payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			setorService.edit(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}

		
		return result;
	}
	
	@RequestMapping("/setor/delete.action")
	@ResponseBody
	public Map<String, Object> deleteModel(@RequestBody Setor payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();
		
		try{
			setorService.delete(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}

	
	/*
	 * CRUD Operations for: Trecho
	 */
	@RequestMapping("/trecho/add.action")
	@ResponseBody
	public Map<String, Object> addModel(@RequestBody Trecho payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			trechoService.add(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}
	
	@RequestMapping("/trecho/update.action")
	@ResponseBody
	public Map<String, Object> updateModel(@RequestBody Trecho payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			trechoService.edit(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}

		
		return result;
	}
	
	@RequestMapping("/trecho/delete.action")
	@ResponseBody
	public Map<String, Object> deleteModel(@RequestBody Trecho payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();
		
		try{
			trechoService.delete(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}

	
	/*
	 * CRUD Operations for: Device
	 */
	@RequestMapping("/device/add.action")
	@ResponseBody
	public Map<String, Object> addModel(@RequestBody Device payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			deviceService.add(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}
	
	@RequestMapping("/device/update.action")
	@ResponseBody
	public Map<String, Object> updateModel(@RequestBody Device payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			deviceService.edit(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}

		
		return result;
	}
	
	@RequestMapping("/device/delete.action")
	@ResponseBody
	public Map<String, Object> deleteModel(@RequestBody Device payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();
		
		try{
			deviceService.delete(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}

	
	/*
	 * CRUD Operations for: Estacao
	 */
	@RequestMapping("/estacao/add.action")
	@ResponseBody
	public Map<String, Object> addModel(@RequestBody Estacao payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			estacaoService.add(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}
	
	@RequestMapping("/estacao/update.action")
	@ResponseBody
	public Map<String, Object> updateModel(@RequestBody Estacao payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();

		try{
			estacaoService.edit(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}

		
		return result;
	}
	
	@RequestMapping("/estacao/delete.action")
	@ResponseBody
	public Map<String, Object> deleteModel(@RequestBody Estacao payload, 
			HttpServletRequest request,
			Authentication authentication,
            HttpServletResponse response) {
		
		//Result Map
		Map<String,Object> result = new HashMap<String, Object>();
		
		try{
			estacaoService.delete(payload, authentication);
		}catch(Exception e){
			result.put("message",e.getMessage());
		}
		
		return result;
	}


}
