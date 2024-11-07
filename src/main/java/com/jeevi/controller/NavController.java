package com.jeevi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.jeevi.entity.Users;

@Controller
public class NavController {

	@GetMapping("/Nav")
	public String showNavPage(Model model) {
	    // Add necessary attributes
	    model.addAttribute("message", "You have successfully logged in");
	    model.addAttribute("users", new Users()); // Example user object
	    return "Nav"; // Return the template name (Nav.html)
	}
	
    @GetMapping("/Keyboard")
	public String  getKeyPage()
	{
		return "Keyboard";
	}
 
    	@GetMapping("/Mouse")
    	public String getMouse()
    	{
    		return "Mouse";
    	}
    	@GetMapping("/Headsets")
    	public String getHeadsets()
    	{
    		return "Headsets";
    	}
    	@GetMapping("/Webcams")
    	
    		public String getWebcams()
    		{
    			return "/Webcams";
    		}
    	@GetMapping("/USB")
    	public String getUSB()
    	{
    		return "/USB";
    	}
    	@GetMapping("/Harddisk")
    	public String getHarddrive()
    	{
    		return "/Harddisk";
    	}
    	@GetMapping("/NAS")
    	public String getNAS()
    	{
    		return "NAS";
    	} 
    	 @GetMapping("/Motherboard")
    	 public String getMotherboard()
    	 {
    		 return "Motherboard";
    	 }
    	 @GetMapping("/Processor")
    	 public String getProcessor()
    	 {
    		 return "Processor";
    	 }
    	 @GetMapping("/RAM")
    	 public String getRAM()
    	 {
    		 return "RAM";
    	 }
    	 @GetMapping("/SSD")
    	 public String getSSD()
    	 {
    		 return "SSD";
    	 }
    	 @GetMapping("/Power")
    	 public String getPower()
    	 {
    		 return "Power";
    	 }
    	 @GetMapping("/Cabinet")
    	 public String getCabinet()
    	 {
    		 return "Cabinet";
    	 }
    	 @GetMapping("/Router")
    	 public String getRouter()
    	 {
    		 return "Router";
    	 }
    	 @GetMapping("/Laptops")
    	 public String getLaptops()
    	 {
    		 return "Laptops";
    	 }
    	 @GetMapping("/Desktops")
    	 public String getDesktops()
    	 {
    		 return "Desktops";
    	 }
    	 @GetMapping("/Tablets")
    	 public String getTablets()
    	 {
    		 return "Tablets";
    	 }
    	 @GetMapping("/NUC")
    	 public String getNUC()
    	 {
    		 return "NUC";
    	 }
    	 @GetMapping("/Fan")
    	 public String getFan()
    	 {
    		 return "Fan";
    	 }
    	 @GetMapping("/Liquid_Cooler")
    	 public String getLiquidCooler()
    	 {
    		 return "Liquid_Cooler";
    	 }
    	 @GetMapping("/CPU_Cooler")
    	 public String getCPU_Cooler()
    	 {
    		 return "CPU_Cooler";
    	 }
    	 @GetMapping("/Laser")
    	 public String getLaser()
    	 {
    		 return "Laser";
    	 }
    	 @GetMapping("/Inktank")
    	 public String getInktank()
    	 {
    		 return "Inktank";
    	 }
    	 @GetMapping("/DotMatrix")
    	 public String getDotMatrix()
    	 {
    		 return "DotMatrix";
    	 }
    	 @GetMapping("/Barcode")
    	 public String getBarcode()
    	 {
    		 return "Barcode";
    	 }
    	 @GetMapping("/POS")
    	 public String getPOS()
    	 {
    		 return "POS";
    	 }
    	 @GetMapping("/BarcodeSca")
    	 public String getBarcodeSca()
    	 {
    		 return "BarcodeSca";
    	 }
    	 @GetMapping("/DocumentSca")
    	 public String getDocumentSca()
    	 {
    		 return "DocumentSca";
    	 }
    	 @GetMapping("/Projector")
    	 public String getProjector()
    	 {
    		 return "Projector";
    	 }
    	 @GetMapping("/UPS")
    	 public String getUPS()
    	 {
    		 return "UPS";
    	 }
    	 @GetMapping("/Window")
    	 public String getWindow()
    	 {
    		 return "Window";
    	 }
    	 @GetMapping("/MS")
    	 public String getMS()
    	 {
    		 return "MS";
    	 }
    	 @GetMapping("/Antivirus")
    	 public String getAntivirus()
    	 {
    		 return "Antivirus";
    	 }
    	 
    	 
		 @GetMapping("/GamingLaptops")
    	 public String getGamingLaptops()
    	 {
    		 return "GamingLaptops";
    	 }
		 @GetMapping("/GamingKeyboards")
    	 public String getGamingKeyboards()
    	 {
    		 return "GamingKeyboards";
    	 }
		 @GetMapping("/GamingMouse")
    	 public String getGamingMouse()
    	 {
    		 return "GamingMouse";
    	 }
		 @GetMapping("/GamingMousepad")
    	 public String getGamingMousepad()
    	 {
    		 return "GamingMousepad";
    	 }
		 @GetMapping("/GamingHeadphones")
    	 public String getGamingHeadphones()
    	 {
    		 return "GamingHeadphones";
    	 }
		 @GetMapping("/GamingChairs")
    	 public String getGamingChairs()
    	 {
    		 return "GamingChairs";
    	 }
		 @GetMapping("/ThermalPaste")
    	 public String getThermalPaste()
    	 {
    		 return "ThermalPaste";
    	 }
		 @GetMapping("/CablesConnectors")
    	 public String getCablesConnectors()
    	 {
    		 return "CablesConnectors";
    	 }
		 @GetMapping("/GamingCabinet")
    	 public String getGamingCabinet()
    	 {
    		 return "GamingCabinet";
    	 }
		
		 @GetMapping("/GMotherboard")
    	 public String getGMotherboard()
    	 {
    		 return "GMotherboard";
    	 }
		 @GetMapping("/GGraphicCards")
    	 public String getGGraphicCards()
    	 {
    		 return "GGraphicCards";
    	 }
		 @GetMapping("/GPowerSupply")
    	 public String getGPowerSupply()
    	 {
    		 return "GPowerSupply";
    	 }
		 @GetMapping("/GRAM")
    	 public String getGRAM()
    	 {
    		 return "GRAM";
    	 }
		 @GetMapping("/GSSD")
    	 public String getGSSD()
    	 {
    		 return "GSSD";
    	 }
		 @GetMapping("/GHardDisks")
    	 public String getGHardDisks()
    	 {
    		 return "GHardDisks";
    	 }
		 @GetMapping("/GMonitors")
    	 public String getGMonitors()
    	 {
    		 return "GMonitors";
    	 }
		
		 @GetMapping("/AppleAcc")
    	 public String getAppleAcc()
    	 {
    		 return "AppleAcc";
    	 }
		 @GetMapping("/Logo")
    	 public String getLogo()
    	 {
    		 return "logo";
    	 }
		 @GetMapping("/AppleiMac")
    	 public String getAppleiMac()
    	 {
    		 return "AppleiMac";
    	 }
		 @GetMapping("/AppleiPad")
    	 public String getAppleiPad()
    	 {
    		 return "AppleiPad";
    	 }
		 @GetMapping("/AppleMac")
    	 public String getAppleMac()
    	 {
    		 return "AppleMac";
    	 }
		 @GetMapping("/AppleMacPro")
    	 public String getAppleMacPro()
    	 {
    		 return "AppleMacPro";
    	 }
		 @GetMapping("/RapooGPad")
    	 public String getRapooGPad()
    	 {
    		 return "RapooGPad";
    	 }
		 @GetMapping("/RapooKeyboards")
    	 public String getRapooKeyboards()
    	 {
    		 return "RapooKeyboards";
    	 }
		 @GetMapping("/RapooMice")
    	 public String getRapooMice()
    	 {
    		 return "RapooMice";
    	 }
		 @GetMapping("/RapooWebcam")
    	 public String getRapooWebcam()
    	 {
    		 return "RapooWebcam";
    	 }
		 @GetMapping("/MSILaptops")
    	 public String getMSILaptops()
    	 {
    		 return "MSILaptops";
    	 }
		 @GetMapping("/MSICabinets")
    	 public String getMSICabinets()
    	 {
    		 return "MSICabinets";
    	 }
		 @GetMapping("/MSIGGraphicCards")
    	 public String getMSIGGraphicCards()
    	 {
    		 return "MSIGGraphicCards";
    	 }
		 @GetMapping("/MSIMotherboards")
    	 public String getMSIMotherboards()
    	 {
    		 return "MSIMotherboards";
    	 }
		 @GetMapping("/MSIMonitors")
    	 public String getMSIMonitors()
    	 {
    		 return "MSIMonitors";
    	 }
		 @GetMapping("/MSIKeyboards")
    	 public String getMSIKeyboards()
    	 {
    		 return "MSIKeyboards";
    	 }
		 @GetMapping("/Intel12")
    	 public String getIntel12()
    	 {
    		 return "Intel12";
    	 }
		 @GetMapping("/Intel11")
    	 public String getIntel11()
    	 {
    		 return "Intel11";
    	 }
		 @GetMapping("/IntelNUC")
    	 public String getIntelNUC()
    	 {
    		 return "IntelNUC";
    	 }
		 @GetMapping("/Color")
    	 public String getColor()
    	 {
    		 return "Color";
    	 }
		 @GetMapping("/Digital")
    	 public String getDigital()
    	 {
    		 return "Digital";
    	 }
		 @GetMapping("/Games")
    	 public String getGames()
    	 {
    		 return "Games";
    	 }
		 @GetMapping("/Kingston")
    	 public String getKingston()
    	 {
    		 return "Kingston";
    	 }
		 @GetMapping("/offer")
    	 public String getoffer()
    	 {
    		 return "offer";
    	 }
		 @GetMapping("/brands")
    	 public String getbrands()
    	 {
    		 return "brands";
    	 }
		 @GetMapping("/build")
    	 public String getbuild()
    	 {
    		 return "build";
    	 }
		
		 @GetMapping("/wishlist")
    	 public String getwishlist()
    	 {
    		 return "wishlist";
    	 }
		 @GetMapping("/product-details")
    	 public String getproduct()
    	 {
    		 return "product-details";
    	 }
    	}


