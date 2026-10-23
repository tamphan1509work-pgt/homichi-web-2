import React, { useState } from 'react';
import { X, Video, Eye, Calendar, MapPin, CheckCircle2, ChevronRight, Users, Clock, ShieldCheck } from 'lucide-react';

interface FactoryTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRfq?: () => void;
}

const ZONES = [
  {
    id: 'smt',
    name: '01. Phân xưởng bo mạch SMT tự động',
    specs: 'Máy dán linh kiện siêu tốc JUKI Nhật Bản · Kiểm tra quang học 3D AOI · Phòng sạch Class 100.000',
    capacity: '2.400.000 bo mạch/năm',
    description: 'Chuyên sản xuất bo mạch biến tần Dual Inverter cho bếp từ và điều hòa, cùng các cụm vi xử lý Smart WiFi IoT. Kiểm soát tĩnh điện ESD 100% đảm bảo không xảy ra hiện tượng đánh thủng vi mạch.',
    points: ['Tự động gắp linh kiện sai số 0.01mm', 'Hàn hồi lưu Reflow 10 vùng nhiệt Nitơ', 'Đo dòng rò và quá áp tự động']
  },
  {
    id: 'tooling',
    name: '02. Phân xưởng khuôn mẫu & Dập chính xác',
    specs: 'Máy phay CNC 5 trục Makino · Máy dập thủy lực 400 tấn · Đo kiểm quang học CMM Zeiss',
    capacity: '120 bộ khuôn đúc chính xác/năm',
    description: 'Chủ động 100% việc chế tác khuôn ép nhựa ABS, PP kỹ thuật và vỏ kim loại sơn tĩnh điện. Rút ngắn chu kỳ chế tạo khuôn mẫu thử nghiệm T1 xuống dưới 20 ngày.',
    points: ['Độ bóng bề mặt gương SP-A1', 'Thép khuôn nhập khẩu Thụy Điển & Nhật', 'Tối ưu luồng chảy nhựa giảm bavia']
  },
  {
    id: 'lab',
    name: '03. Phòng Lab đo kiểm & Thử nghiệm độ bền',
    specs: 'Phòng thử nghiệm âm học không phản xạ (Anechoic chamber) · Buồng sốc nhiệt -40°C đến +150°C',
    capacity: 'Kiểm chuẩn 24/7',
    description: 'Nơi diễn ra các bài thử nghiệm khắc nghiệt: kiểm tra độ ồn quạt điều hòa ở mức tĩnh âm < 28dB, thử nghiệm đốt nóng liên tục 2.000 giờ của bếp từ và kiểm tra va đập chống rơi.',
    points: ['Máy phân tích âm học Brüel & Kjær', 'Thử nghiệm điện áp cao 3750V chống giật', 'Buồng phun sương muối kháng ăn mòn']
  },
  {
    id: 'assembly',
    name: '04. Dây chuyền lắp ráp & Đóng gói pallet',
    specs: 'Dây chuyền băng tải pallet tự động · Đóng thùng robot tự động · Hệ thống quét mã vạch MES',
    capacity: '4.500 thành phẩm/ngày',
    description: 'Từng sản phẩm sau khi lắp ráp hoàn thiện đều đi qua cổng test thông số tải điện cuối cùng trước khi đóng gói bao bì mang nhận diện thương hiệu của đối tác.',
    points: ['Kiểm thử chức năng 100% từng máy', 'Đóng gói carton 5 lớp chống ẩm xuất khẩu', 'Truy xuất nguồn gốc bằng Barcode Serial']
  }
];

export const FactoryTourModal: React.FC<FactoryTourModalProps> = ({
  isOpen,
  onClose,
  onOpenRfq
}) => {
  const [activeZone, setActiveZone] = useState(ZONES[0].id);
  const [scheduleSuccess, setScheduleSuccess] = useState(false);
  const [visitDate, setVisitDate] = useState('');
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');

  if (!isOpen) return null;

  const currentZone = ZONES.find(z => z.id === activeZone) || ZONES[0];

  const handleScheduleVisit = (e: React.FormEvent) => {
    e.preventDefault();
    setScheduleSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-[24px] border border-[#e2e8f0] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#e2e8f0] shrink-0">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-[#0062d2]" />
            <h3 className="font-serif text-lg font-bold text-[#0f172a]">
              Tham quan không gian nhà máy Homichi (Virtual Facility Tour)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-[#64748b] hover:text-[#0f172a] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          
          {/* Subtitle info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#64748b] pb-2 border-b border-[#e2e8f0]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0062d2]" />
              <span>Tổ hợp sản xuất Homichi · Lô CN-08 Cụm Công nghiệp Công nghệ cao</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0062d2]" />
              <span>Tiêu chuẩn vận hành ISO 9001:2015 & 5S Nhật Bản</span>
            </div>
          </div>

          {/* Zone Selector Buttons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {ZONES.map(z => {
              const active = z.id === activeZone;
              return (
                <button
                  key={z.id}
                  onClick={() => setActiveZone(z.id)}
                  className={`p-3 text-left rounded-[16px] border transition-all cursor-pointer ${
                    active
                      ? 'bg-blue-50 border-[#0062d2] text-[#0062d2] font-semibold'
                      : 'bg-[#f8fafc] border-[#e2e8f0] text-[#0f172a] hover:border-[#0062d2]/50'
                  }`}
                >
                  <div className="font-mono text-[10px] text-[#64748b] uppercase">{z.id}</div>
                  <div className="font-serif text-xs truncate mt-0.5">{z.name}</div>
                </button>
              );
            })}
          </div>

          {/* Active Zone Detail Card */}
          <div className="p-6 rounded-[20px] bg-[#f8fafc] border border-[#e2e8f0] space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-mono text-xs text-[#0062d2] font-semibold uppercase">
                  Quy trình sản xuất công nghệ cao
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#0f172a] mt-0.5">
                  {currentZone.name}
                </h4>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-[11px] text-[#64748b] block">Năng suất định mức</span>
                <span className="font-mono text-xs font-semibold text-[#0062d2] bg-white px-2.5 py-1 rounded-full border border-[#e2e8f0] shadow-sm">
                  {currentZone.capacity}
                </span>
              </div>
            </div>

            {/* Simulated Live Viewport Visual Container */}
            <div className="w-full h-[220px] rounded-[16px] bg-gradient-to-tr from-[#0b1324] to-[#1e293b] text-white p-6 relative overflow-hidden flex flex-col justify-between shadow-inner">
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">Live Camera Feed</span>
                </div>
                <span className="font-mono text-[10px] bg-black/40 px-2 py-0.5 rounded border border-white/20">
                  SEC-CAM-0{ZONES.findIndex(z => z.id === activeZone) + 1} · 1080P
                </span>
              </div>

              <div className="z-10 max-w-lg">
                <span className="font-mono text-xs text-[#82b4ff] block mb-1">{currentZone.specs}</span>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {currentZone.description}
                </p>
              </div>

              {/* Decorative grid lines */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>

            {/* Key Quality Checkpoints */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-semibold text-[#0f172a] block">Điểm kiểm soát then chốt (Quality Gateways):</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {currentZone.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#333333] bg-white p-2.5 rounded-[12px] border border-[#e2e8f0] shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#0062d2] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Book on-site tour form */}
          <div className="p-6 rounded-[20px] bg-[#f8fafc] border border-[#e2e8f0] space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#0062d2]" />
              <h5 className="font-serif font-bold text-base text-[#0f172a]">
                Đặt lịch tham quan trực tiếp nhà máy Homichi
              </h5>
            </div>
            <p className="text-xs text-[#64748b]">
              Homichi hân hạnh đón tiếp các phái đoàn doanh nghiệp, chuỗi bán lẻ và đối tác ODM/OEM tới thăm quan trực tiếp và làm việc tại nhà máy.
            </p>

            {!scheduleSuccess ? (
              <form onSubmit={handleScheduleVisit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="date"
                  required
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="px-4 py-2.5 rounded-[9999px] border border-[#cbd5e1] bg-white text-xs text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0062d2]/30 shadow-sm"
                />
                <input
                  type="text"
                  required
                  placeholder="Tên đại diện doanh nghiệp *"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  className="px-4 py-2.5 rounded-[9999px] border border-[#cbd5e1] bg-white text-xs text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0062d2]/30 shadow-sm"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-[40px] bg-[#0062d2] hover:bg-[#004fb0] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                >
                  Xác nhận đặt lịch hẹn
                </button>
              </form>
            ) : (
              <div className="p-3 bg-blue-50 rounded-[14px] border border-[#0062d2]/50 text-xs text-[#0f172a] flex items-center justify-between">
                <span>Đã ghi nhận lịch hẹn tham quan của <strong>{visitorName}</strong> vào ngày {visitDate}. Đội ngũ lễ tân Homichi sẽ gọi xác nhận trong 2 giờ.</span>
                <span className="text-emerald-700 font-semibold shrink-0">✓ Đã tiếp nhận</span>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
