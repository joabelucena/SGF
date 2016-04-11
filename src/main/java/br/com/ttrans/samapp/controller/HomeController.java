package br.com.ttrans.samapp.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.ttrans.samapp.library.ClassFinder;
import br.com.ttrans.samapp.library.WebInfo;
import br.com.ttrans.samapp.model.Menu;
import br.com.ttrans.samapp.model.Setor;
import br.com.ttrans.samapp.model.User;
import br.com.ttrans.samapp.service.SetorService;

/**
 * Handles requests for the application home page.
 */
@Scope("session")
@Controller
public class HomeController {

	//Endpoint package for scanning
	private static final String WSPACKAGE = "br.com.ttrans.samapp.ws.endpoint";

	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@Autowired
	private SetorService service;

	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = { "/", "/index" }, method = RequestMethod.GET)
	public String home(Locale locale, Model model) {

		logger.info("Welcome home! The client locale is {}.", locale);

		return "index";
	}

	/**
	 * Lists all web services and its informations
	 */
	@RequestMapping(value = { "/services", "/services/" }, method = RequestMethod.GET)
	public String listServices(Locale locale, Model model, HttpServletRequest request) {

		List<Class<?>> classes = ClassFinder.find(WSPACKAGE);
		
		List<String[]> list = new ArrayList<String[]>();

		String path = request.getRequestURL().substring(0,
				request.getRequestURL().indexOf(request.getContextPath()) + request.getContextPath().length());

		for (Class<?> obj : classes) {

			if (obj.isAnnotationPresent(WebInfo.class)) {

				WebInfo ws = (WebInfo) obj.getAnnotation(WebInfo.class);

				System.out.println("Class Name: " + obj.getName());

				System.out.println("---------");

				System.out.println("Description :" + ws.description());
				System.out.println("Name :" + ws.name());
				System.out.println("URL :" + ws.url());

				System.out.println("---------");
				
				String[] info = { ws.name(), ws.description(),  path.concat(ws.url()) };		
				
				list.add(info);
				
			}

		}

		model.addAttribute("lists", list);

		return "services";
	}

	@RequestMapping(value = "/menu/load", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, Object> menuLoad(HttpServletRequest request, Locale locale, Model model,
			Authentication authentication) {

		User user = (User) request.getSession().getAttribute("loggedUser");

		Map<String, Object> result = new HashMap<String, Object>();

		List<Menu> menu = new ArrayList<Menu>();

		Iterator<Menu> it = user.getRole().getMenus().iterator();

		while (it.hasNext()) {
			Menu mn = it.next();
			if (mn.getParent() == null)
				menu.add(mn);
		}

		result.put("items", menu);

		return result;
	}

	@RequestMapping(value = "/gettime", method = RequestMethod.POST)
	public ResponseEntity<Date> getTime(HttpServletRequest request) {

		return new ResponseEntity<Date>(new Date(), HttpStatus.OK);
	}

	@RequestMapping(value = "/getuser", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<String> getUser(HttpServletRequest request, Authentication aut) {
		
		User user = (User) request.getSession().getAttribute("loggedUser");
		
		return new ResponseEntity<String>(user.getUserID() + " | " + user.getRole().getDisplayName(), HttpStatus.OK);
		
	}

	@RequestMapping(value = "/test", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, Object> testeSam(HttpServletRequest request, Authentication authentication) {

		Map<String, Object> result = new HashMap<String, Object>();
		
		Setor s1 = new Setor("BRT/PALMAS");
		Setor s2 = new Setor("VLT/SANTOS");
		
		System.out.println("Inserindo 1");
		service.add(s1, authentication);
		

		System.out.println("Inserindo 2");
		service.add(s2, authentication);
		
		logger.info("S1 ID: " + s1.getId());
		logger.info("S2 ID: " + s2.getId());
		
		s1.setDesc("BRT-PALMAS");
		
		

		System.out.println("Editando 1");
		service.edit(s1, authentication);
		

		System.out.println("Deletando 2");
		service.delete(s2, authentication);
		

		return result;
	}
}