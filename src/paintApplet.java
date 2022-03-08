import java.applet.*;
import java.awt.event.*;
import java.awt.*;

public class paintApplet extends Applet implements MouseMotionListener {

	public void init() {	
		addMouseMotionListener(this);
		setBackground(Color.white);
	}
	
	public void mouseDragged(MouseEvent m) {
		Graphics g = getGraphics();
		g.setColor(Color.black);
		g.fillOval(m.getX(), m.getY(), 20, 20);
	}
	
	public void mouseMoved(MouseEvent m) {
	}

}
