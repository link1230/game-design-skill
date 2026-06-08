"""
批量生成装备系统原型图 draw.io 文件
每个界面一个 .drawio 文件 + 导航总图
"""
import os
import xml.etree.ElementTree as ET

DESKTOP = os.path.expanduser("~/Desktop")
OUT_DIR = DESKTOP

def make_mxfile(name):
    mxfile = ET.Element("mxfile", host="draw.io")
    diag = ET.SubElement(mxfile, "diagram", name=name)
    model = ET.SubElement(diag, "mxGraphModel", {
        "dx": "800", "dy": "600", "grid": "1", "gridSize": "10",
        "guides": "1", "tooltips": "1", "connect": "1", "arrows": "1",
        "page": "1", "pageWidth": "390", "pageHeight": "844"
    })
    root = ET.SubElement(model, "root")
    ET.SubElement(root, "mxCell", id="0")
    ET.SubElement(root, "mxCell", id="1", parent="0")
    return mxfile, root

def add_rect(root, id, x, y, w, h, label="", fill="#FFFFFF", stroke="#CCCCCC", rounded="1", font_size="12", font_weight="normal", align="center"):
    style = f"rounded={rounded};whiteSpace=wrap;html=1;fillColor={fill};strokeColor={stroke};strokeWidth=1;fontSize={font_size};fontStyle={font_weight};align={align};"
    ET.SubElement(root, "mxCell", id=str(id), value=label, style=style, parent="1", vertex="1")
    # geometry
    geom = ET.SubElement(root.findall(f".//mxCell[@id='{id}']")[-1] if False else root, "mxGeometry")
    # simpler approach: set geometry as attribute on the cell
    cell = root.findall(f".//*[@id='{id}']")[-1] if False else None
    # Actually, let's just build the XML string directly. ElementTree is awkward for this.
    return

# This is getting complex. Let me write draw.io files directly as XML strings.
print("Generating draw.io files...")
files = []
