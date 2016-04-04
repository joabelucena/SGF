package br.com.ttrans.samapp.security;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import br.com.ttrans.samapp.model.SystemFeature;
import br.com.ttrans.samapp.model.User;

@Component
public class RequestInterceptor extends HandlerInterceptorAdapter {
	
	private static final Logger logger = LoggerFactory.getLogger(RequestInterceptor.class);
	
	@Autowired
	private MessageSource messageSource;
	
	@Override
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		
		boolean lReturn = true;
				
		User user = (User) request.getSession().getAttribute("loggedUser");
		
//		if (!user.getRole().getFeatures().contains(new SystemFeature(request.getServletPath()))){
//			
//			//Log
//			logger.info("** Access denied! Check info bellow **");
//			logger.info("User: "+user.getUsername());
//			logger.info("Role: "+user.getRole().getRoleName());
//			logger.info("Requested Action: "+request.getServletPath());
//			
//			//Adds denied response status
//			Map<String, Object> result = new HashMap<String, Object>();
//			
//			result.put("message", messageSource.getMessage("response.AccessDenied", null, request.getLocale()));
//			
//			response.getWriter().print(result);
//			
//			//Deny access
//			lReturn = false;
//			
//		}
	
		return lReturn;
	}

	@Override
	public void postHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		//System.out.println("########## - Post-Handle");

	}

	@Override
	public void afterCompletion(HttpServletRequest request,
			HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		//System.out.println("########## - After-Completion");

	}

}
